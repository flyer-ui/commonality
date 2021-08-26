import { hasOwn } from './common'
import { warn } from './debug'

interface IBroadcaster {
  subscribe: (channel: string, commit: Function) => void
  publish: (channel: string, data: Object | Array<any>) => void
  unsubscribe: (channel: string, commit?: Function) => boolean
}

type TStore =
  | {
      channel: Array<Function>
    }
  | object

export const Broadcaster = (): IBroadcaster => {
  const store: TStore = {}

  return {
    /** 订阅广播 */
    subscribe: (channel: string, commit: Function): void => {
      if (hasOwn(store, channel)) {
        store[channel].add(commit)
      } else {
        store[channel] = new Set([commit])
      }
    },

    /** 广播消息 */
    publish: (channel: string, data: Object | Array<any>): void => {
      if (hasOwn(store, channel)) {
        if (!Array.isArray(data)) {
          data = [data]
        }

        store[channel].forEach((commit: Function) => {
          commit.apply(null, data)
        })
      } else {
        warn(`The '${channel}' is not found by the 'store'.`)
      }
    },

    /** 取消订阅广播 */
    unsubscribe: (channel: string, commit?: Function): boolean => {
      if (hasOwn(store, channel)) {
        if (commit) {
          const commits:Array<Function> = store[channel]
          const index = commits.indexOf(commit)
          if (index > -1) {
            commits.splice(index, 1)
          } else {
            warn(`The ${commit} is not found by the 'store'.`)
          }
        } else {
          delete store[channel]
        }
      } else {
        warn(`The '${channel}' is not found by the 'store'.`)
      }
      return true
    }
  }
}

import {hasOwn} from './common'
import {warn} from './debug'

interface IBroadcaster {
  subscribe: (channel: string, commit: Function) => void
  publish: (channel:string,data: Object) => void
  unsubscribe: (channel: string) => boolean
}

type TStore = {
    channel:Array<Function>
} | object

export const Broadcaster = (): IBroadcaster => {
  const store:TStore = {}

  return {
    /** 订阅广播 */
    subscribe: (channel: string, commit: Function) => {
        if(hasOwn(store,channel)){
            store[channel].push(commit)
        }else{
            store[channel] = [commit]
        }
    },

    /** 广播消息 */
    publish: (channel:string,data:Object) => {
        if(hasOwn(store,channel)){
            store[channel].forEach((commit:Function)=>{
                commit.call(null,data)
            })
        }else{
            warn(`The '${channel}' is not found by the 'store'.`)
        }
    },

    /** 取消订阅广播 */
    unsubscribe: (channel: string):boolean => {
        if(hasOwn(store,channel)){
            delete store[channel]
        }else{
            warn(`The '${channel}' is not found by the 'store'.`)
        }
        return true
    },
  }
}

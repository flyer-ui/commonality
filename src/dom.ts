
import { warn } from './debug'

export function on (target:HTMLElement, type:string, listener:any, options:Object):void {
  if (target && target.addEventListener) {
    target.addEventListener(type, listener, options)
  } else {
    warn('on', 'The addEventListener method was not found on the target.')
  }
}

export function off (target:HTMLElement, type:string, listener:any, options:Object):void {
  if (target && target.removeEventListener) {
    target.removeEventListener(type, listener, options)
  } else {
    warn('on', 'The removeEventListener method was not found on the target.')
  }
}

export function stop (event:Event) {
  if (event) {
    event.stopPropagation()
  }
}

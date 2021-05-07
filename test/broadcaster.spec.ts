import {Broadcaster} from '../src/broadcaster'
import {log} from '../src/debug'

test('broadcaster 初始化成功',()=>{
    const broadcaster = Broadcaster()
    expect(broadcaster).toHaveProperty('subscribe')
    expect(broadcaster).toHaveProperty('unsubscribe')
    expect(broadcaster).toHaveProperty('publish')
})

test('broadcaster 订阅一个频道',()=>{
    const broadcaster = Broadcaster()
    const commit = (data)=>{
        log('收到广播回来的数据commit',data)
    }
    const commit1 = (data)=>{
        log('收到广播回来的数据commit1',data)
    }
    broadcaster.subscribe('114',commit)
    broadcaster.subscribe('114',commit1)
    broadcaster.publish('114','data')
    broadcaster.unsubscribe('114',commit)
    broadcaster.publish('114','data')
})

test('broadcaster 订阅一个频道,多个消息',()=>{
    const broadcaster = Broadcaster()
    broadcaster.subscribe('114',(data)=>{
        log('收到广播回来的数据1',data)
    })
    broadcaster.subscribe('114',(data)=>{
        log('收到广播回来的数据2',data)
    })
    broadcaster.publish('114','data')
    broadcaster.unsubscribe('114')
})

test('broadcaster 订阅多个频道,多个消息',()=>{
    const broadcaster = Broadcaster()
    broadcaster.subscribe('114',(data)=>{
        log('收到广播回来的数据114-1',data)
    })
    broadcaster.subscribe('114',(data)=>{
        log('收到广播回来的数据114-2',data)
    })
    broadcaster.publish('114','data')
    broadcaster.unsubscribe('114')

    broadcaster.subscribe('115',(data1,data2)=>{
        console.log('收到广播回来的数据115-1',data1,data2)
    })
    broadcaster.subscribe('115',(data1,data2)=>{
        console.log('收到广播回来的数据115-2',data1,data2)
    })
    broadcaster.publish('115',['data1','data2'])
    broadcaster.unsubscribe('115')
    broadcaster.unsubscribe('115')
    broadcaster.unsubscribe('114')
})
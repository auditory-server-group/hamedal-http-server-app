var express = require('express')
var hamedal = require('hamedal-sdk')

var falcon = hamedal.falcon;
var dolphin = hamedal.dolphin;

//2. 创建express服务器
var server = express()

//3. 获取设备列表
server.get('/hamedal/devices', async function (request, response) {
    let Camera = await hamedal.listFalconDevInfo();
    let Audio = await hamedal.listDolphinDevInfo();
    response.send({Camera, Audio})
})

server.get('/hamedal/falcon/AIMode', async function (request, response) {
    //console.log('', request.query.sn);
    var cameras = falcon.devices();
    if (cameras.length == 0) {
        console.log('no falcon camera');
    } else {
        //console.log(cameras);
        //do sth
        for (i = 0; i < cameras.length; i++) {
            var camera = new falcon.FalconCamera(cameras[i]);
            try {
                var infoPayload = await camera.getDeviceInfo();
            } catch (e) {
                //console.log(e);
            }
            let dev = camera.parseDevInfoPayload(infoPayload);
            if (dev.sn == request.query.sn) {
                var isEnabled = await camera.isAIModeEnabled();
            }
        }
    }
    response.send({
        SN:request.query.sn,
        enabled: isEnabled == 1
    })
})

server.get('/hamedal/falcon/setAIMode', async function (request, response) {
    //console.log(request.query.sn);
    //console.log(request.query.enable);
    var cameras = falcon.devices();
    if (cameras.length == 0) {
        console.log('no falcon camera');
    } else {
        //console.log(cameras);
        //do sth
        for (i = 0; i < cameras.length; i++) {
            var camera = new falcon.FalconCamera(cameras[i]);
            try {
                var infoPayload = await camera.getDeviceInfo();
            } catch (e) {
                //console.log(e);
            }
            let dev = camera.parseDevInfoPayload(infoPayload);
            var isEnabled;
            if (dev.sn == request.query.sn) {
                if (request.query.enable == 'true') {
                    await camera.enableAIMode();
                } else {
                    await camera.disableAIMode();
                }
                var isEnabled = await camera.isAIModeEnabled();
            }
        }
    }
    response.send({
        SN:request.query.sn,
        enabled: isEnabled == 1
    })
})

server.get('/hamedal/falcon/peopleCount', async function (request, response) {
    var cameras = falcon.devices();
    if (cameras.length == 0) {
        console.log('no falcon camera');
    } else {
        //console.log(cameras);
        //do sth
        for (i = 0; i < cameras.length; i++) {
            var camera = new falcon.FalconCamera(cameras[i]);
            try {
                var infoPayload = await camera.getDeviceInfo();
            } catch (e) {
                //console.log(e);
            }
            let dev = camera.parseDevInfoPayload(infoPayload);
            var isEnabled;
            if (dev.sn == request.query.sn) {
                var count = await camera.getBodyCount();
            }
        }
    }
    response.send({
        SN:request.query.sn,
        peopleCount: count
    })
})

port = 9008;
var args = process.argv.splice(2)
if (args.length > 0) {
    port = +args[0];
    if (port <= 0){
        port = 9008;
    }
}
server.listen(port);

//4. 绑定端口
console.log('listen:  http://localhost:%d', port);
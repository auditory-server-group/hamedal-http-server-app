var express = require('express')
var hamedal = require('hamedal-sdk')

var server = express()

//0. 引导界面
server.get('/', function (request, response) {
    let inter = {
        getDevicesList:"http://localhost:9008/hamedal/devices",
        getCameraStatus:"http://localhost:9008/hamedal/falcon/AIMode?sn=1234567890asdf",
        setCameraStatus:"http://localhost:9008/hamedal/falcon/setAIMode/?sn=1234567890asdf&enable=false",
        getPeopleCount:"http://localhost:9008/hamedal/falcon/peopleCount/?sn=1234567890asdf"
    }
    let example = {
        example_interface: inter,
        readme: "https://github.com/auditory-server-group/hamedal-http-server-app"
    }

    response.send(example)
})

//1. 获取设备列表
server.get('/hamedal/devices', async function (request, response) {
    let Camera = await hamedal.listFalconDevInfo();
    let Audio = await hamedal.listDolphinDevInfo();
    response.send({Camera, Audio})
})

//2. 获取camera是否为aimode状态
server.get('/hamedal/falcon/AIMode', async function (request, response) {
    var isEnabled = await hamedal.getFalconCameraAIModeStatus(request.query.sn);
    response.send({
        SN: request.query.sn,
        enabled: isEnabled == 1
    })
})

//3. 设置camera为aimode或者非aimode
server.get('/hamedal/falcon/setAIMode', async function (request, response) {
    var isEnabled = await hamedal.enableFalconCameraAIMode(request.query.sn, request.query.enable);
    response.send({
        SN: request.query.sn,
        enabled: isEnabled == 1
    })
})

//4. 获取camera智能人数统计
server.get('/hamedal/falcon/peopleCount', async function (request, response) {
    var count = await hamedal.getFalconCameraPeopleCount(request.query.sn);
    response.send({
        SN: request.query.sn,
        peopleCount: count
    })
})

port = 9008;
var args = process.argv.splice(2)
if (args.length > 0) {
    port = +args[0];
    if (port <= 0) {
        port = 9008;
    }
}
server.listen(port);

//4. 绑定端口
console.log('listen:  http://localhost:%d', port);
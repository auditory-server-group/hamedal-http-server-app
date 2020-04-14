if (process.platform == 'darwin'){
    var Service = require('node-mac').Service;
}else if (process.platform == 'win32'){
    var Service = require('node-windows').Service;
}

console.log('platform is ', process.platform);

let svc = new Service({
    name: 'hamedal-sdk-http-server',    //服务名称
    description: 'hamedal-devices-management', //描述
    script: '../hamedal-http-server-app.js' //nodejs项目要启动的文件路径
});

svc.on('install', () => {
    svc.start();
});

svc.install();
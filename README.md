<p>
  <a href="https://www.npmjs.com/package/@hamedal-falcon"></a>
</p>


<img class="hamedal-logo" width="200px" height="auto" src="https://cdn.shopify.com/s/files/1/0119/8424/0736/files/HAMEDAL_284bd7f1-ddb6-4bb0-b84d-b1ada2af7625_251x.png?v=1568187958" />

# Hamedal Software Development Kit (SDK)

## Prerequisites

Hamedal SDK supportes the following node versions:

>= 10.1.15

## Get started
Then you can install and start using the hamedal sdk you need first install it and the transport(make sure you have connect hamedal device)
```
  npm install 
  node hamedal-http-server-app.js
```
if you want to change the listen port , please type
```
  node hamedal-http-server-app.js [port]
```

## http interface

#### list all the device info
```
	/hamedal/devices
```

which could be return like this
```json
{"Camera":[{"Brand":"Hamedal","InnerModel":"Falcon","OuterModel":"V20","SN":"invalid","version":"1.100.0.2","firmware":"Hamedal_V20"}],"Audio":[{"Brand":"Hamedal","InnerModel":"Dolphin","OuterModel":"AW20 Pro","SN":"MJ02A8A88A91900016","version":"0.1.5.2","firmware":"AW20-PRO_V0.2"}]}
```

#### get if falcon camera AIMode is enabled
```
	/hamedal/falcon/AIMode?sn=[device serial number]
```
which could be return like this
```
{"enabled":true}
```

#### set falcon camera AIMode enabled or disabled
```
	/hamedal/falcon/setAIMode/?sn=[device serial number]&enable=[true or false]
```
example
```
http://localhost:9008/hamedal/falcon/setAIMode/?sn=invalid&enable=false
```
while return back is
```
{"enabled":false}
```

#### get falcon camera people count 
```
	/hamedal/falcon/peopleCount/?sn=[serial number]
```
example
```
	http://localhost:9008/hamedal/falcon/peopleCount/?sn=invalid
```
return
```
{"peopleCount":1}
```


## Here is demo screenshot image.

<img class="hamedal-demo" width="200px" height="auto" src="https://cdn.shopify.cn/s/files/1/0119/8424/0736/files/2020-04-01_5.23.02.png?v=1585794843" />

## Issues
If you have a question or found a bug please [open an issue](https://github.com/hamedal-sdk/issues). Thank you
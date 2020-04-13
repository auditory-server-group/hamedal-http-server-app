<p>
  <a href="https://www.npmjs.com/package/@hamedal-falcon"></a>
</p>


<img class="hamedal-logo" width="200px" height="auto" src="https://cdn.shopify.com/s/files/1/0119/8424/0736/files/HAMEDAL_284bd7f1-ddb6-4bb0-b84d-b1ada2af7625_251x.png?v=1568187958" />

# Hamedal Software Development Kit (SDK)

## Prerequisites

Hamedal SDK supportes the following node versions:

    >= 12.16.1

## Get started
Then you can install and start using the hamedal sdk you need first install it and the transport(make sure you have connect hamedal device)
```javascript
npm install 
npm start
```
Default port to listen is 9008 and if you want to change the port listen on, please use
```javascript
npm start [port number]
```
Example
```javascript
npm start 4040
```
## Http interface

#### 1.List all the device info
```http request
/hamedal/devices
```
Example:
```http request
http://localhost:9008/hamedal/devices
```
Return:
```json
{"Camera":[
  {
    "Brand":"Hamedal",
    "InnerModel":"Falcon",
    "OuterModel":"V20",
    "SN":"1234567890asdf",
    "version":"1.100.0.2",
    "firmware":"Hamedal_V20"}],
  "Audio":[
  {
    "Brand":"Hamedal",
    "InnerModel":"Dolphin",
    "OuterModel":"AW20 Pro",
    "SN":"MJ02A8A88A91900016",
    "version":"0.1.5.2",
    "firmware":"AW20-PRO_V0.2"}
  ]}
```

#### 2.Get if falcon camera AIMode is enabled
We should use device serial number to confirm which camera to query:
```http request
/hamedal/falcon/AIMode?sn=[device SN info]
```
Example
```http request
http://localhost:9008/hamedal/falcon/AIMode?sn=1234567890asdf
```
Return
```json
{
    "SN":"1234567890asdf",
    "enabled":true
}
```

#### 3.Set falcon camera AIMode enabled or disabled
```http request
/hamedal/falcon/setAIMode/?sn=[device serial number]&enable=[true or false]
```
Example:
```http request
http://localhost:9008/hamedal/falcon/setAIMode/?sn=1234567890asdf&enable=false
```
Return
```json
{
    "SN":"1234567890asdf",
    "enabled":true
}
```

#### 4.Get falcon camera people count 
```http request
/hamedal/falcon/peopleCount/?sn=[serial number]
```
Example:
```http request
http://localhost:9008/hamedal/falcon/peopleCount/?sn=1234567890asdf
```
Return:
```json
{
  "SN":"invalid",
  "peopleCount":1
}
```

## Issues
If you have a question or found a bug please [open an issue](https://github.com/hamedal-sdk/issues). Thank you
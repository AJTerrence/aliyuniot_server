const Promise = require('bluebird')
const request = require('request-promise')
const crypto = require('crypto')
const moment = require('moment')

//common parameters
const Format = 'JSON'
const Version = '2016-05-30'
const AccessKeyId = ''//
const SignatureMethod = 'HMAC-SHA1'
const Timestamp = moment().utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z'
const SignatureVersion = '1.0'
const SignatureNonce = Math.random().toString().substr(2,15)
const RegionId = 'cn-shanghai'

const format = 'Format=' + encodeURIComponent(Format)
const version = 'Version=' + encodeURIComponent(Version)
const accessKeyId = 'AccessKeyId=' + encodeURIComponent(AccessKeyId)
const signatureMethod = 'SignatureMethod=' + encodeURIComponent(SignatureMethod)
const timestamp = 'Timestamp=' + encodeURIComponent(Timestamp)
const signatureVersion = 'SignatureVersion=' + encodeURIComponent(SignatureVersion)
const signatureNonce = 'SignatureNonce=' + encodeURIComponent(SignatureNonce)
const regionId = 'RegionId=' + encodeURIComponent(RegionId)

const commonparams = [format,version,accessKeyId,signatureMethod,timestamp,signatureVersion,signatureNonce,regionId]
//secret
const AccessKeySecret = ''//secret + &


const createProduct = function(ctx){
	const Action = 'CreateProduct'
	const Name  ='nowdone'
	const Desc = 'test'
	const CatId = 12

	const action = 'Action=' + encodeURIComponent(Action)
	const name = 'Name=' + encodeURIComponent(Name)
	const desc = 'Desc=' + encodeURIComponent(Desc)
	const catId = 'CatId=' + encodeURIComponent(CatId)

	const params = commonparams.concat([action,name,desc,catId]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			console.error(err.error)
			console.log('create product fails')
			reject(err)
		})
	})
}


const updateProduct = function(ctx){
	const Action = 'UpdateProduct'
	const ProductKey = '1000204680'
	const CatId = '11'
	const ProductName = 'testiot'
	const ProductDesc = 'TEST'

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const catId = 'CatId=' + encodeURIComponent(CatId)
	const productName = 'ProductName=' + encodeURIComponent(ProductName)
	const productDesc = 'ProductDesc=' + encodeURIComponent(ProductDesc)

	const params = commonparams.concat([action,productKey,catId,productName,productDesc]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('update product fails')
			reject(err)
		})
	})
}

const queryDevice = function(ctx){
	const Action = 'QueryDevice'
	const ProductKey = '1000204680'
	const PageSize = 10
	const CurrentPage = 1

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const pageSize = 'PageSize=' + encodeURIComponent(PageSize)
	const currentPage = 'CurrentPage=' + encodeURIComponent(CurrentPage)

	const params = commonparams.concat([action,productKey,pageSize,currentPage]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			console.info(_data.Data.DeviceInfo)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('query device fails')
			reject(err)
		})
	})
}

const registDevice = function(ctx){
	const Action = 'RegistDevice'
	const ProductKey = '1000204680'
	const DeviceName = 'testdevice'

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const deviceName = 'DeviceName=' + encodeURIComponent(DeviceName)

	const params = commonparams.concat([action,productKey,deviceName]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('regist device fails')
			reject(err)
		})
	})
}

const applyDeviceWithNames = function(ctx){
	const Action = 'ApplyDeviceWithNames'
}

const queryApplyStatus = function(ctx){
	const Action = 'QueryApplyStatus'
	const ApplyId = ''//Long

	const action = 'Action=' + encodeURIComponent(Action)
	const applyId = 'ApplyId=' + encodeURIComponent(ApplyId)

	const params = commonparams.concat([action,applyId]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('query apply status fails')
			reject(err)
		})
	})
}

const queryPageByApplyId = function(ctx){
	const Action = 'QueryPageByApplyId'
	const ApplyId = ''//Long
	const PageSize = 10
	const CurrentPage = 1

	const action = 'Action=' + encodeURIComponent(Action)
	const applyId = 'ApplyId=' + encodeURIComponent(ApplyId)
	const pageSize = 'PageSize=' + encodeURIComponent(PageSize)
	const currentPage = 'CurrentPage=' + encodeURIComponent(CurrentPage)

	const params = commonparams.concat([action,applyId,pageSize,currentPage]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('query page fails')
			reject(err)
		})
	})
}

const queryDeviceByName = function(ctx){
	const Action = 'QueryDeviceByName'
	const ProductKey = '1000204680'
	const DeviceName = 'testdevice'

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const deviceName = 'DeviceName=' + encodeURIComponent(DeviceName)

	const params = commonparams.concat([action,productKey,DeviceName]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('query device by name fails')
			reject(err)
		})
	})
}

const batchGetDeviceState = function(ctx){
	const Action = 'BatchGetDeviceState'
}

const pub = function(ctx){
	const Action = 'Pub'
	const ProductKey = '1000204680'
	const MessageContent = '1'//base64
	const TopicFullName = '/1000204680/test/update'
	const Qos = '0'//Integer

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const messageContent = 'MessageContent=' + encodeURIComponent(MessageContent)
	const topicFullName = 'TopicFullName=' + encodeURIComponent(TopicFullName)
	const qos = 'Qos=' + encodeURIComponent(Qos)

	const params = commonparams.concat([action,productKey,messageContent,topicFullName,qos]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('pub fails')
			reject(err)
		})
	})
}


const revertRpc = function(ctx){
	const Action = 'RevertRpc'
	const ProductKey = '1000204680'
	const DeviceName = 'testdevice'
	const RpcContent = '1'
	const TimeOut = 5000

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const deviceName = 'DeviceName=' + encodeURIComponent(DeviceName)
	const rpcContent = 'RpcContent=' + encodeURIComponent(RpcContent)
	const timeOut = 'TimeOut=' + encodeURIComponent(TimeOut)

	const params = commonparams.concat([action,productKey,deviceName,rpcContent,timeOut]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('RevertRpc fails')
			reject(err)
		})
	})
}

const pubBroadcast = function(ctx){
	const Action = 'PubBroadcast'
	const ProductKey = '1000204680'
	const MessageContent = '0'
	const TopicFullName = '/broadcast/1000204680/+'

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const messageContent = 'MessageContent=' + encodeURIComponent(MessageContent)
	const topicFullName = 'TopicFullName=' + encodeURIComponent(TopicFullName)

	const params = commonparams.concat([action,productKey,messageContent,topicFullName]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.cn-shanghai.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('pubBroadcast fails')
			reject(err)
		})
	})
}


const getDeviceShadow = function(ctx){
	const Action = 'GetDeviceShadow'
	const ProductKey = '1000204680'
	const DeviceName = 'testdevice'

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const deviceName = 'DeviceName=' + encodeURIComponent(DeviceName)

	const params = commonparams.concat([action,productKey,deviceName]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.cn-shanghai.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('get deviceshadow fails')
			reject(err)
		})
	})
}

const updateDeviceShadow = function(ctx){
	const Action = 'UpdateDeviceShadow'
	const ProductKey = ''
	const DeviceName = ''
	const DeviceShadow = ''

	const action = 'Action=' + encodeURIComponent(Action)
	const productKey = 'ProductKey=' + encodeURIComponent(ProductKey)
	const deviceName = 'DeviceName=' + encodeURIComponent(DeviceName)
	const deviceShadow = 'DeviceShadow=' + encodeURIComponent(DeviceShadow)

	const params = commonparams.concat([action,productKey,deviceName,deviceShadow]).sort().join('&')

	const str = encodeURIComponent(params)
	const StringToSign = 'GET' + '&%2F&' + str

	const _sign = crypto.createHmac('sha1',AccessKeySecret).update(StringToSign).digest('base64')
	const Signature = encodeURIComponent(_sign)
	const url = 'https://iot.aliyuncs.com/?' + params + '&Signature=' + Signature

	return new Promise(function(resolve,reject){
		request({url:url,json:true}).then(function(response){
			const _data = response
			console.log(_data)
			if(_data.Success === true){
				ctx.body = {
					success: true,
					RequestId: _data.RequestId
				}
				resolve(_data)
			}else if(_data.Success === false){
				ctx.body = {
					success: false,
					errormessage: _data.ErrorMessage
				}
				resolve(_data)
			}
		}).catch(function(err){
			throw new Error('update deviceshadow fails')
			reject(err)
		})
	})
}

module.exports = {
	createProduct,
	updateProduct,
	queryDevice,
	registDevice,
	applyDeviceWithNames,
	queryApplyStatus,
	queryPageByApplyId,
	queryDeviceByName,
	batchGetDeviceState,
	pub,
	revertRpc,
	pubBroadcast,
	getDeviceShadow,
	updateDeviceShadow
}

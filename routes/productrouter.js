const router = require('koa-router')()
const product = require('../controllers/product')

router.get('/createproduct',product.createProduct)//1
router.get('/updateproduct',product.updateProduct)//1
router.get('/querydevice',product.queryDevice)//1
router.get('/registdevice',product.registDevice)//1
router.get('/applydevice',product.applyDeviceWithNames)//0
router.get('/queryapplystatus',product.queryApplyStatus)//0
router.get('/querypagebyapplyid',product.queryPageByApplyId)//0
router.get('/querydevice',product.queryDeviceByName)//1
router.get('/batchgetdevice',product.batchGetDeviceState)//0
router.get('/pub',product.pub)//1
router.get('/revertrpc',product.revertRpc)//1
router.get('/pubbroadcast',product.pubBroadcast)//0接口报错
router.get('/getdeviceshadow',product.getDeviceShadow)//0接口报错
router.get('/updatedeviceshadow',product.updateDeviceShadow)//0接口报错

module.exports = router
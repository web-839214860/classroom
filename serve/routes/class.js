const router = require('koa-router')()
const classmessage = require('../controllers/classmessage')

router.prefix('/class')

router.get('/classroom_message/:a', classmessage.index)
router.get('/classroom_message', classmessage.index)

router.post('/classroom_message/add', classmessage.add)

router.get('/class_edit/edit/:b', classmessage.edit)
router.post('/class_edit/doedit/:b', classmessage.doedit)

router.get('/classroom_message/delect/:b', classmessage.delect)

module.exports = router
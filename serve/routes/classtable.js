const router = require('koa-router')()
const classtablemessage = require('../controllers/classtablemessage')

router.prefix('/classtable')

router.get('/classtable_message', classtablemessage.index)
// router.get('/classtable_message/:b', classtablemessage.index)
router.get('/class_assign/:b', classtablemessage.assign)
// router.get('/class_assign/:b/:a', classtablemessage.assign)

router.post('/classtable_message/add', classtablemessage.add)

router.post('/class_assign/doassign/:b', classtablemessage.doassign)

router.get('/class_assign_cancel/:b', classtablemessage.cancel)

router.get('/delect/:b', classtablemessage.delect)


module.exports = router
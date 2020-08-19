const router = require('koa-router')()
const classoccupymessage = require('../controllers/classoccupy')

router.prefix('/class')

// router.get('/classroom_message/:a', classmessage.index)
router.get('/classroom_occupyMessage', classoccupymessage.index)

// router.post('/classroom_message/add', classmessage.add)

// router.get('/class_edit/edit/:b', classmessage.edit)
// router.post('/class_edit/doedit/:b', classmessage.doedit)

router.get('/classroom_occupyMessage/delect/:b', classoccupymessage.delect)



module.exports = router
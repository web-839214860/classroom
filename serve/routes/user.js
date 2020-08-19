const router = require('koa-router')()
const message = require('../controllers/message')

router.prefix('/user')



router.get('/message/:a', message.index)
router.get('/message', message.index)



router.post('/message/sent', message.sent)


router.get('/message/edit/:b',message.edit)
router.post('/message/doedit/:b',message.doedit)

router.get('/message/delect/:b', message.delect)
module.exports = router
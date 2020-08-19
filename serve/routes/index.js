const router = require('koa-router')()
const homeController = require('../controllers/home')

router.get('/', homeController.index)

module.exports = router

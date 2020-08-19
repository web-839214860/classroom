const router = require('koa-router')()
const tableController = require('../../controllers/client/table')
const passport = require("../../middlewares/passport")

router.prefix('/api/tables')

router.all('/*',
    passport.authenticate('jwt', { session: false })
    , async (ctx, next) => {
        console.log(ctx.request)
        await next()
    })

router.post('/posttable', tableController.posttable)

router.get('/tableinfo', tableController.tableinfo)

router.get('/alltableinfo', tableController.alltableinfo)

router.delete('/deletetable/:id', tableController.deletetable)

router.put('/puttable/:id', tableController.puttable)

router.get('/onetableinfo/:id', tableController.onetableinfo)

router.post('/postclass/:id', tableController.postclass)


module.exports = router

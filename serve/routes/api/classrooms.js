const router = require('koa-router')()
const classroomController = require('../../controllers/client/classroom')
const passport = require("../../middlewares/passport")

router.prefix('/api/classrooms')

router.all('/*',
    passport.authenticate('jwt', { session: false })
    , async (ctx, next) => {
        console.log(ctx.request)
        await next()
    })

router.get('/getclassroominfo', classroomController.getclassroominfo)

router.delete('/deleteclassroom/:id', classroomController.deleteclassroom)

router.post('/postclassroom', classroomController.postclassroom)

router.get('/getclassroomtimeinfo', classroomController.getclassroomtimeinfo)

router.delete('/deletetimetable/:id', classroomController.deletetimetable)


module.exports = router

var express = require('express')
var multer = require('multer')
var path = require('path')
var fs = require('fs')
var router = express.Router()

router.use(multer({
    dest:'./public/file'
}).any())

router.post('/img',function(req,res){
    var f = req.files[0]
    var oldname = f.filename
    var newname = oldname + path.parse(f.originalname).ext
    fs.renameSync('./public/file/' + oldname,'./public/file/' + newname)

    res.send('/file/' + newname)
})



module.exports = router
var express = require('express');
var pool = require('./w_pool');
var router = express.Router();

/* 头像 */
router.get('/login', function(req, res) {
  var json = req.query
  pool.conn({
    arr:[json.loginuid],
    sql:'select * from login where uid=?',
    success:function(data){
      res.send(data)
    },
    error:function(err){
      res.send(err)
    }
  })
});


// 创建小说
router.post('/createbook',function(req,res){
  var json = req.body
  console.log(json)
  pool.conn({
    arr:[json.bookurl,json.bookname,json.bookintro,json.loginuid],
    sql:'insert into create_book(bookurl,bookname,bookintro,loginuid) values(?,?,?,?)',
    success:function(data){
      res.send('ok')
    },
    error:function(err){
      res.send(err)
    }
  })
})

// 小说列表
router.get('/my_list',function(req,res){
  var json = req.query
  pool.conn({
    arr:[json.loginuid],
    sql:'select * from create_book where loginuid=?',
    success:function(data){
      res.send(data)
    },
    error:function(err){
      res.send(err)
    }
  })
})

// 发布小说
router.get('/delete_book',function(req,res){
  var json = req.query
  pool.conn({
    arr:[json.bookuid],
    sql:'delete from create_book where uid=?',
    success:function(data){
      res.send('ok')
    },
    error:function(err){
      res.send(err)
    }
  })
})

module.exports = router;

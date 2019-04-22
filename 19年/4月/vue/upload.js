//上传图片还是根据formdata来实现的

function upload (val) {
  var formdata = new FormData()
  formdata.append('file',val)//键值对的方式传输，后台接受

  //下面就是ajax|axios等通过post提价
  $ajax({
    type: 'POST'
    data: formdata,
    success: function(val) {
      console.log(val);
    }
  })
}

//php 后台语法

//<?php
//$_FILES['file']判断是否已经接受了文件
//if (move_uploaded_file($_FILES['file']['tmp_name'],'E:/xampp/htdocs/upload/'.$_FILES['file']['name'])) {
// 前半句是从临时存储位置移动file，到逗号后面的位置，要上传的位置也需要把文件夹改为可以修改添加等等的功能
  //  $path = "http://192.168.1.93/upload/".$_FILES['file']['name'] ;
//?>}


//预览功能稍后

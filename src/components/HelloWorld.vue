<template>
<div id ='text' :style ='{"height":screenHeight+"px"}'>
  <div class="login">
      <div class="head">
        斯必得后台登录
      </div>
        <!-- <form class="" action="login.php" method="post"> -->
      <div class="login-content">

        <div class="user">
          <i class="icon iconfont icon-gerenzhuye"></i>
          <input type="text" name="users" value="" placeholder="请输入用户名" />
          </div>
          <div class="u">
        </div>
        <div class="pwd">
          <i class="iconfont icon-dengluzhucemima"></i>
          <input type="password" name="pwd" value="" placeholder="请输入密码"/>
          </div>
          <div class="p">
        </div>
      </div>
      <div class="footer">
      <div class="">
        <input type="checkbox" name=""class="check" value="" />记住密码
      </div>
        <span class= 'forget'>忘记密码？</span>
      </div>
      <!-- <input type="submit" name="" value="login" /> -->
      <button type="" name="button">登录</button>
      <p class="result"></p>
    <!-- </form> -->
    </div>
 </div>
</template>
<script>
import '@/icon/iconfont.css';
  export default {
    name : 'hlw',
    data () {
      return {
          msg : 'hello world',
          screenHeight : document.documentElement.clientHeight
      }
    },
    methods : {
      jump : function () {
        var xml = new XMLHttpRequest();
        xml.open('GET','http://192.168.1.93/speed/Apilogin.php?usersName=root&pwd=111111',true);
        xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xml.onreadystatechange = function()
        {
            if(xml.readyState == 4 && xml.status == 200)
          {
            var res =xml.responseText;
             console.log(res);
            // console.log(JSON.parse(res))
            }
         }
        xml.send(null);
      }
    }
  }

</script>

<style scoped>
.login {
  color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 20px 5%;
  margin: 0 auto;
  text-align: center;
  /* background: #fff; */
  border : 1px solid #5FD8FF;
  width: 30%;
  position: absolute;
  right: 10%;
  top: 45%;
  box-shadow: 0 0 20px 1px #5FD8FF inset;
}
.head {
  font-weight: bold;
  text-align: left;
  padding: 10px;
  line-height: 18px;
  font-size: 18px;
  margin-bottom: 20px;
}
.login-content input{
  display: block;
  outline: none;
  text-indent: 20px;
  height: 38px;
  margin-bottom: 20px;
  border : none;
  border-bottom: 1px solid #5FD8FF;
  width: 100%;
  background: #333;
  box-shadow: 0 0 20px 1px #5FD8FF inset;
  /* width: 30px; */
}
.login button {
  width: 100%;
  height: 38px;
  border: none;
  border-radius: 6px;
  margin : 10px 0;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  background: #333;
  box-shadow: 0 0 20px 1px #5FD8FF inset;
  color: #fff;
}
.login-content div {

  display: flex;

}
.login-content div i.iconfont {
  font-size: 38px;
}
/* .login-content div i.iconfont:nth-child(1) {
  font-weight: lighter;
} */
.login-content div>input {
  flex:1;
}
.footer {
  display: flex;
  justify-content:space-between;
}
 #text {
   /* display: flex; */
   /* justify-content: center;
   align-items: center; */
  width: 100%;
  background: #333;
}
</style>

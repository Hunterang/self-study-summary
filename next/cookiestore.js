const Store = (function () {
        return {
          setCookie (name,value,expiresday) {
            var extra = new Date();
            extra.setDate(extra.getDate()+expiresday);//可以对value进行ecode进行转码，或者escape进行转码
            document.cookie = name+'='+ value+
            ((expiresday == null) ? '' : ';expires ='+extra.toGMTString())
          },
          getcookie (name) {
              var reg = new RegExp(name+'=([^;]+)');
              var arr = document.cookie.match(reg);
              if (arr) {
                return arr[1].trim();
              }else{
                return '';
              }
          },
          delcookie (name) {
            this.setCookie(name,null,-1);
          }
        }
      }());


/*
一个简易版的分页js
可优化的空间比较大
*/

splitpage : function (obj) {
	//obj是即将分页的数组
		var idx = obj.length;

		if (idx<=20) {
			this.page.innerHTML = ''
			return
		}
		var begin,end,num;
		num = Math.ceil(idx/20);

		var str = '<li >首页</li>';
		for (var j = 0; j < num; j++) {
			str += '<li >'+(j+1)+'</li>';
		}
		str += '<li >尾页</li>';
		this.page.innerHTML = str;
		this.page.style.left =window.innerWidth/2-this.page.offsetWidth/2 +'px';
		this.page.children[1].style.color = '#c7000a';
		var _this =this;

    function pagejump (el) {
      //分页之后的新数组
      el.onclick = function (e) {
        e = e || window.event;
        var reg = /^\d+$/;
        if (reg.test(e.target.innerText)) {//数字判断
          var page = parseInt(e.target.innerText);
          begin = 20*(page-1);
          end = 20*page <= idx ? 20*page : idx;
          show(0,obj.length,obj,'none')
          show(begin,end,obj,'table-row')
          Array.prototype.forEach.call(el.children,function (val,index) {
            val.style.color = '';
          })
          el.children[page].style.color = '#c7000a';
        }else {
          if (e.target.innerText == '首页') {
            show(0,obj.length,obj,'none');
            show(0,20,obj,'table-row')//做的表格的分页，表格的显示为table-row
            Array.prototype.forEach.call(el.children,function (val,index) {
              val.style.color = '';
            })
            el.children[1].style.color = '#c7000a';
          }if (e.target.innerText == '尾页') {
              show(0,obj.length,obj,'none');
              show((num-1)*20,idx-1,obj,'table-row')
              Array.prototype.forEach.call(el.children,function (val,index) {
                val.style.color = '';
              })
              el.children[num].style.color = '#c7000a';
          }
        }
      }
      function show(start,end,obj,style,fn) {
        for (var i = start; i < end; i++) {
          obj[i].style.display = style;
        }
        if (fn) {
          fn();
        }
      }
    }
  }

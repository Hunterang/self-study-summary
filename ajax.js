function myAjax(opt) {
  opt = opt || {};
  opt.type = opt.type || 'GET';
  opt.data = opt.data || {};
  opt.url  = opt.url || 'www.baidu.com';
  opt.success = opt.success || function () {};
  opt.error = opt.error ||'';

  var xml=null;
  if (window.XMLHttpRequest) {
    var xml = new XMLHttpRequest();
  }else {
    var xml = new ActiveXObject("Microsoft.XMLHTTP");
  }
  var datastr ='';
  var arr=[];
  for(var item in opt.data){
    arr.push(item+'='+opt.data[item]);
  }
  datastr = arr.join('&');
  if (opt.type.toUpperCase() == 'GET') {
    xml.open('GET',opt.url+'?'+datastr);
    xml.send(null);
  }
  if (opt.type.toUpperCase() == 'POST') {
      xml.open('POST',opt.url);
      xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8')
      xml.send(datastr);
  }
  xml.onreadystatechange = function () {
    if (xml.readyState==4 && xml.status==200){
      opt.success(xml.responseText);
    }
  }
}

function table (data,arg) {
  data.forEach( (val,index) => {
    creat(val,arg)
  })
}
function creat(val,obj,index) {
  var tr = document.createElement('tr')
  if (index>10) {
    // tr.style.display = 'none'
  }
  tr.innerHTML = '<td>'+index+'</td>\
                  <td>'+val.Name+'</td>\
                  <td>'+val.displayName+'</td>\
                  <td>'+val.name+'</td>\
                  <td>'+val.Message+'</td>\
                  <td>'+val.name+'</td>'
    obj.appendChild(tr)
}

export {
  table
}

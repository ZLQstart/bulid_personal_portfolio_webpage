$(function(){
  //调用滚动监听
  $('#myTabContent').scrollspy({
     target: '#navbar-example' 
    })
  
  //启动标签页
  $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

});



//封装选择ID
window.onload=function(){
    function $(id){
      return document.getElementById(id);
    }
//鼠标进
    $("chuxian").onmouseover=function(){
      $("List").style.display="block"
    }
//鼠标出
    $("chuxian").onmouseout=function(){
      $("List").style.display="none"
      this.style.boxShadow='none'
    }
}
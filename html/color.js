var Links = {
    setColor : function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i<alist.length){
        // alist[i].style.color=color;
        // i=i+1;
        // }
        $('a').css('color',color);
    }
}

  /*
  function BodySetColor(color){
    document.querySelector('body').style.color = color;
  }
  function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor=color;
  }
  위 코드를 객체를 활용해서 아래처럼 정리 */

var Body = {
    setColor : function(color){  //setColor은 property
      //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }, //property는 콤마로 구분
    setBackgroundColor : function(color){
      //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
    }
  }

  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value='day';
      Links.setColor(null);
    }else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value='night';
      Links.setColor(null);
    }
  }
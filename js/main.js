window.onload = function() {
  var index_height = $(window).height();//浏览器当前窗口可视区域高度 
  $(".index").css("height",index_height);
  $("#second,#sixth").css("height",index_height);
  $("#fourth").css("height",1.4*index_height);
  setTimeout(function() {
       $('.image, .btn, h1, .index').toggleClass('active');
  }, 500);

  //首页按钮点击时间
  var btn = document.getElementsByClassName("btn")[0];
  btn.addEventListener("click",link,false);
  var bike = document.getElementsByClassName("third-bottom")[0];
  bike.addEventListener("click",link_bike,false);
  function link(){
    var h1 = $(window).height();
    var h2 = $("#first").height();
    var h = (h1 - h2) / 2;
    $("html,body").animate({
        scrollTop:h1-h
      },"slow"
    );
  }
  function link_bike(){
    var h3 = $("#fourth").offset().top;
    $("html,body").animate({
      scrollTop:h3
      },
      "slow"
    );
  }

  //first动画
  animate("#first",function(){
    $(".first-text").animate({
          top:"45%",
          opacity:"1"
        },
          "slow"
      );
  });

  //second动画
  var flag = 0;
  animate("#second",function(){
    $(".second-left").animate({
      "margin-top":"0",
      "opacity":"1"
      },
      "200"
    );
    $(".second-center").delay("100").animate({
      "margin-top":"0",
      "opacity":"1"
      },
      "200"
    );
    $(".second-right").delay("200").animate({
      "margin-top":"0",
      "opacity":"1"
      },
      "200"
    );
    var left=0 ,center=0 ,right=0;
    var left_name = ".second-left p span",center_name=".second-center p span",right_name=".second-right p span";

    if(!flag){
      add(left_name , left , 500,25);
      add(center_name , center , 20,1);
      add(right_name , right , 10,1);
      flag = 1;
    }
    
    function add(ele,start,end,x){
      setInterval(function(){
        if(start <= end){
          $(ele).text(start);
        }
        start += x;
      },100);
    }

  });

  //third动画
  animate("#third",function(){
    $("#content_1").animate({
        top:"15%",
        opacity:"1"
      },
        "slow"
    ); 
    $("#content_2").delay("200").animate({
        top:"15%",
        opacity:"1"
      },
        "slow"
    );  
    $("#content_3").delay("400").animate({
        top:"15%",
        opacity:"1"
      },
        "slow"
    );
    $(".title1").animate({
      opacity:"1",
      top:"0%"
      },
      "slow"
    );
    $(".title2").delay("200").animate({
      opacity:"1",
      top:"0%"
      },
      "slow"
    );
    $(".title3").delay("400").animate({
      opacity:"1",
      top:"0%"
      },
      "slow"
    );
    $(".third-bottom").delay("500").animate({
      opacity:"1",
      left:"50%"
      },
      "1000"
    );
  });
  //fifth元素翻转动画及初始动画
  $("#ele1").click(0,clickRotate3d);
  $("#ele2").click(1,clickRotate3d);
  $("#ele3").click(2,clickRotate3d);
  
  function clickRotate3d(event){
    var i = event.data;
    var newClassName;
    var t = document.getElementsByClassName("photo");
    var centerPhoto = t[i];
    if(centerPhoto.className.search(/back/) != -1){
      newClassName = centerPhoto.className.replace(/back/,"front");
      centerPhoto.setAttribute("class",newClassName);
    }else{
      newClassName = centerPhoto.className.replace(/front/,"back");
      centerPhoto
      .setAttribute("class",newClassName);
    }
  }

  // animate("#fifth",function(){
  //   $(".fifth-left").animate({
  //     "opacity":"1"
  //     },
  //   "slow");
  //   $(".fifth-center").delay("100").animate({
  //     "opacity":"1"
  //   },
  //   "slow");
  //   $(".fifth-right").delay("300").animate({
  //     "opacity":"1"
  //   },
  //   "slow");
  // });

  //轮播图滑动效果
  // animate("#fourth",function(){
  //   $(".row").animate({
  //     top:"30%"
  //     },
  //     "slow"
  //   );
  // });
  animate("#fourth",function(){
    $(".row-one").animate({
      "top":"0",
      "opacity":"1"
      },
      "slow"
    );
    $(".row-two").animate({
      "top":"0",
      "opacity":"1"
      },
      "slow"
    );   
  });

  //为图片设置最大化点击事件
  $(".row .pic").click(function(){
    $(".swrap_bg").css("display","block");
    $(".fourth-bigImg-box").css("display","block");
    var index = $(".pic").index(this);
    var className = "#bigImg"+index;
    $(className).css("opacity","1");
    $(".swrap_bg").click(function(){
      $(this).css("display","none");
      $(".fourth-bigImg-box").css("display","none");
    });
  });

  //点击最大化图片时透明度轮播
  $(".fourth-bigImg img").click(function(){
    var n = $(".fourth-bigImg img").length;
    var j;
    for(var i=0;i<n;i++){
      if($(".fourth-bigImg img").eq(i).css("opacity") == 1){
        $(".fourth-bigImg img").eq(i).css("opacity","0");
        j = i;
      }
    }

    if(j == n-1){
      $(".fourth-bigImg img").eq(0).css("opacity","1");
    }else{
      $(".fourth-bigImg img").eq(j+1).css("opacity","1");
    }
  });
  
  function animate(element,action){
    var elementTop = $(element).offset().top;
    var windowTop = $(window).height();
    window.onresize = function(){
      windowTop = $(window).height();
    };
    $(window).scroll(function(){
      var scrollTop = $(document).scrollTop();
      var t = (1/2)*windowTop;
      if((windowTop + scrollTop) > (elementTop + t )){
        action();
      }
    });
  }

};













    /*Make the left and right sides follow your mouse. This would look better if it can work with a fixed background image. */
    // $('.index').mousemove((e)=>{
    //    var mx = e.pageX,
    //        w = $(window).width();
    //    if(mx > (w/2)){
    //       let offset = mx - (w/2);
    //      $('.image-right').css({
    //        'margin-left': 0,
    //        'z-index': 2
    //       });
    //       $('.image-left').css({
    //         'margin-right': `-${offset}px`,
    //         'z-index': 3
    //       });
    //    }
    //    if(mx < (w/2)){
    //       let offset = (w/2) - mx;
    //      $('.image-left').css({
    //        'margin-right': 0,
    //        'z-index': 2
    //       });
    //       $('.image-right').css({
    //         'margin-left': `-${offset}px`,
    //         'z-index': 3
    //       });
    //    }
    // });
    // $('.index').mouseleave((e)=>{
     
    //       $('.image-left').css({
    //        'margin-right': 0,
    //        'z-index': 2
    //       });
    //       $('.image-right').css({
    //         'margin-left': 0,
    //         'z-index': 3
    //       });
    // });
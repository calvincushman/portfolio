$(function(){
  $("#box1").click(function(){
    event.preventDefault();
    $(".art").show(30);
    $(".contact").hide();
    $(".programming").hide();
    $(".about").hide();
    $(".top").hide(6000);
  });

  $("#box2").click(function(){
    event.preventDefault();
    $(".about").show(30);
    $(".contact").hide();
    $(".programming").hide();
    $(".art").hide();
    $(".top").hide(6000);
  })

  $("#box3").click(function(){
    event.preventDefault();
    $(".contact").show(30);
    $(".programming").hide();
    $(".art").hide();
    $(".about").hide();
    $(".top").hide(6000);
  });

  $("#box4").click(function(){
    event.preventDefault();
    $(".programming").show(30);
    $(".contact").hide();
    $(".about").hide();
    $(".art").hide();
    $(".top").hide(6000);
  });

  $(".home").click(function(){
    event.preventDefault();
    $(".top").show(6000);
    $(".programming").show();
    $(".art").show();
    $(".about").show();
    $(".contact").show();
  })
});

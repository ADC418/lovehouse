$(function () {
    //首页、关于企业鼠标经过变红
    // 先写要改变的值，再写原来的颜色

    // 第一种方法，使用鼠标移入移出的方式
    // $('.gyqy_a').mouseenter(function(){
    //     $(this).css('color','#ff5722')
    // })
    // $('.gyqy_a').mouseleave(function(){
    //     $(this).css('color','#b0b0b0')
    // })

    //使用hover的方式
    $('.gyqy_a').hover(function () {
        $(this).css('color', '#ff5722')
    }, function () {
        $(this).css('color', '#b0b0b0')
    })



    // 使用swiper制作拖动轮播图
    // var mySwiper = new Swiper('.swiper-container', {
    //     slidesPerView: 3,//设置slider容器能够同时显示的slides数量
    //     // spaceBetween: 30,
    //     centeredSlides: true,//设定为true时，active slide会居中，而不是默认状态下的居左。
    //     loop: true,
    // })

    var swiper = new Swiper('.swiper-container', {
        loop:true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
       
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      });

})
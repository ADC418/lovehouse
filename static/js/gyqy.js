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


      
      //地图
     
      var myChart = echarts.init(document.getElementById('china-map'));
      // console.log(myChart)
      var option = {
          tooltip: {
              // show: false //不显示提示标签
              formatter: '{b}', //提示标签格式
              backgroundColor: "#fff",//提示标签背景颜色
              textStyle: { color: "#000" } ,//提示标签字体颜色

          },
          series: [{
              type: 'map',
              mapType: 'china',
              label: {
                  normal: {
                      show: true,//显示省份标签
                      textStyle: { color: "#000" }//省份标签字体颜色
                  },
                  emphasis: {//对应的鼠标悬浮效果
                      show: true,
                      textStyle: { color: "#fff" }

                  }
              },
              itemStyle: {
                  normal: {
                      borderWidth: .5,//区域边框宽度
                      borderColor: '#fff',//区域边框颜色
                      areaColor: "#d3d1d1",//区域颜色
                  },
                  emphasis: {
                      borderWidth: .5,
                      borderColor: '#fff',//鼠标经过显示的边框颜色
                      areaColor: "orange",//鼠标经过显示的区域背景颜色
                  }
              },
              data: [
                  { name: '陕西', selected: true }//陕西为选中状态
              ]
          }],
      };

      myChart.setOption(option);
      myChart.on('mouseover', function (params) {
          var dataIndex = params.dataIndex;
          // console.log(params);
      });
 

})
// swiper创建轮播
var oneswiper = new Swiper(".swiper-container", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 's-pav',
            bulletActiveClass: 's-pav-active'
        }
    })
    // 第四个模块jquery写鼠标进入事件
$('.f-first li').mouseover(function() {
    for (var i = 0; i < $('.f-first img').length; i++) {
        $('.f-first img').eq(i).removeClass('f-g-active')
        $('.f-second img').eq(i).removeClass('f-g-active')
    }
    if ($(this).index() === 0) {
        $('.f-first img').eq($(this).index()).addClass('f-g-active').next().addClass('f-g-active')
    } else if ($(this).index() === 1) {
        $('.f-first img').eq($(this).index() + 1).addClass('f-g-active').next().addClass('f-g-active')
    }
})
$('.f-second li').mouseover(function() {
        for (var i = 0; i < $('.f-second img').length; i++) {
            $('.f-second img').eq(i).removeClass('f-g-active')
            $('.f-first img').eq(i).removeClass('f-g-active')
        }
        if ($(this).index() === 0) {
            $('.f-second img').eq($(this).index()).addClass('f-g-active').next().addClass('f-g-active')
        } else if ($(this).index() === 1) {
            $('.f-second img').eq($(this).index() + 1).addClass('f-g-active').next().addClass('f-g-active')
        }
    })
    // 第五个模块轮播
var twoswiper = new Swiper('.swiper-box', {
        autoplay: {
            delay: 5000
        },
        preventInteractionOnTransition: true,
        setWrapperSize: true, //设置容器自适应为子元素宽度之和
        wrapperClass: 'swiper-bigbox',
        slideClass: 'f-slide',
        loop: true,
        loopAdditionalSlides: 0,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: '.swiper-f-next',
            prevEl: '.swiper-f-prev',
        }
    })
    // 第六个轮播图
var threeswiper = new Swiper('.swiper-s-body', {
        wrapperClass: 'swiper-s-bigbox',
        slideClass: 'swiper-s-view',
        slidesPerView: 5,
        slidesPerGroup: 1,
        setWrapperSize: true,
        spaceBetween: 10,
        loop: true,
        loopAdditionalSlides: 4,
        autoplay: {
            delay: 5000
        }
    })
    // 楼梯导航

for (var i = 0; i < $('.dh').length; i++) {
    $('.dh').eq([i]).click(function() {
        $(this).addClass('dh-active').siblings().removeClass('dh-active')
    })
}
// form表单事件
var flag = false
$('.cwyz_select').on('click', function() {
    $('.cwdz_area').toggle();

    if (!flag) {
        $('.cwyz_i').css('transform', 'rotate(180deg)')
        $('.cwdz_area').animate({
            bottom: 42,
        }, "fast")
        flag = true
    } else {
        $('.cwyz_i').css('transform', 'rotate(0deg)')
        $('.cwdz_area').animate({
            bottom: 30,
        }, "fast")
        flag = false
    }
})


$('.cwyz_tel').on('blur', function() {
    var phoneNum = /^1[34578]\\d{9}$/
    if ($(this).val() === '') {
        $(this).val('请输入手机号！')
    } else if (!phoneNum.test($(this).val())) {
        $(this).val('请输入正确的手机号！')
    }
})



$('.cwdz_area_list').on("click", function() {
    var val = "";
    val = $(".cwdz_area_list").eq($(this).index()).text();
    $(".cwyz_sel").val(val);
})

if (!$('.cwyz_name').val() === "") {
    $('.cwyz_submit').on('click', function() {
        location.href = "/submit.html"

    })

}
// 地图
var myChart = echarts.init(document.getElementById('china-map'));
// console.log(myChart)
var option = {
    tooltip: {
        // show: false //不显示提示标签
        formatter: '{b}', //提示标签格式
        backgroundColor: "#fff", //提示标签背景颜色
        textStyle: { color: "#000" } //提示标签字体颜色
    },
    series: [{
        type: 'map',
        mapType: 'china',
        selectedMode: 'multiple',

        label: {
            normal: {
                show: true, //显示省份标签
                textStyle: { color: "#000" } //省份标签字体颜色
            },
            emphasis: { //对应的鼠标悬浮效果
                show: true,
                textStyle: { color: "#fff" }
            }
        },
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#ccc', //区域边框颜色
                areaColor: "#FFF", //区域颜色
            },
            emphasis: {
                borderWidth: .5,
                borderColor: '#fff',
                areaColor: "#ff5722",
            }
        },

        data: [
                { name: '北京', selected: false, value: 5 },
                { name: '天津', selected: false, value: 5 },
                { name: '上海', selected: false, value: 5 },
                { name: '重庆', selected: false, value: 5 },
                { name: '河北', selected: false, value: 5 },
                { name: '河南', selected: false, value: 5 },
                { name: '云南', selected: false, value: 5 },
                { name: '辽宁', selected: false, value: 5 },
                { name: '黑龙江', selected: false, value: 5 },
                { name: '湖南', selected: false, value: 5 },
                { name: '安徽', selected: false, value: 5 },
                { name: '山东', selected: false, value: 5 },
                { name: '新疆', selected: false, value: 5 },
                { name: '江苏', selected: false, value: 5 },
                { name: '浙江', selected: false, value: 5 },
                { name: '江西', selected: false, value: 5 },
                { name: '湖北', selected: false, value: 5 },
                { name: '广西', selected: false, value: 5 },
                { name: '甘肃', selected: false, value: 5 },
                { name: '山西', selected: false, value: 5 },
                { name: '内蒙古', selected: false, value: 5 },
                { name: '陕西', selected: true, value: 10 },
                { name: '吉林', selected: false, value: 5 },
                { name: '福建', selected: false, value: 5 },
                { name: '贵州', selected: false, value: 5 },
                { name: '广东', selected: false, value: 5 },
                { name: '青海', selected: false, value: 5 },
                { name: '西藏', selected: false, value: 5 },
                { name: '四川', selected: false, value: 5 },
                { name: '宁夏', selected: false, value: 5 },
                { name: '海南', selected: false, value: 5 },
                { name: '台湾', selected: false, value: 5 },
                { name: '香港', selected: false, value: 5 },
                { name: '澳门', selected: false, value: 5 }
            ] //各省地图颜色数据依赖value


    }],
    dataRange: {
        show: false,
        x: 'left',
        y: 'bottom',
        splitList: [
            { start: 5, end: 5, color: '#fff' }, //当值为5时，区域背景
            { start: 10, end: 10, color: '#ff5722' }, //当值为10时，区域背景
            // { start: 15, end: 15, color: '#ccc' }, //当值为15时，区域背景
        ],
    },
};

myChart.setOption(option);
myChart.on('mouseover', function(params) {
    var dataIndex = params.dataIndex;
    // console.log(params.dataIndex);

});
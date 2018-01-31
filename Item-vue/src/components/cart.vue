<template>
	<div class="cart">
		<mt-header title="购物车" class="top">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right" class="redact">编辑</mt-button>
		</mt-header>
		<div class="specific"> 
			<div class="infor">  添加地址  </div> 
			<i class="iconfont">&#xe728;</i> 
		</div>

		<div class="line-wrapper">
		  <div class="line-scroll-wrapper">
		    <div class="line-normal-wrapper">
		      <div class="line-normal-left-wrapper">
		        <div class="line-normal-avatar-wrapper">
		        	<img src="1.jpg"/>
		        </div>
		        <div class="line-normal-info-wrapper">
		          <div class="line-normal-user-name">蜡笔小新蜡笔小新蜡</div>
		          <div class="line-normal-msg"><span>在同行的</span>小伙伴</div>
		          <div class="line-normal-time">
		          	<span class="price"><small>￥</small><em>39</em><small>.9</small></span>   <span class="tag" style="background: #FF8000;color: #fff"> 明日达  </span> 
		          </div>
		        </div>
		      </div>
		      <div class="line-normal-icon-wrapper">
		      	<span class="minus">
		      		<i class="icon-jian">-</i>
		      	</span> 
		      	<span class="num">1</span> 
		      	<span class="plus">
		      		<i class="icon-searchplus">+</i>
		      	</span>
		      </div>
		    </div>
		    <div class="line-btn-delete"><button>删除</button></div>
		  </div>
		</div>


	</div>
</template>
<script>
	export default{
		name:"cart",
		data:function(){
			return{

			}
		},
		mounted(){

		}
	}

$(document).ready(function(e) {
    // 设定每一行的宽度=屏幕宽度+按钮宽度
    $(".line-scroll-wrapper").width($(".line-wrapper").width() + $(".line-btn-delete").width());
    // 设定常规信息区域宽度=屏幕宽度
    $(".line-normal-wrapper").width($(".line-wrapper").width());
    // 设定文字部分宽度（为了实现文字过长时在末尾显示...）
    $(".line-normal-msg").width($(".line-normal-wrapper").width() - 280);

    // 获取所有行，对每一行设置监听
    var lines = $(".line-normal-wrapper");
    var len = lines.length; 
    var lastX, lastXForMobile;

    // 用于记录被按下的对象
    var pressedObj;  // 当前左滑的对象
    var lastLeftObj; // 上一个左滑的对象

    // 用于记录按下的点
    var start;

    // 网页在移动端运行时的监听
    for (var i = 0; i < len; ++i) {
        lines[i].addEventListener('touchstart', function(e){
            lastXForMobile = e.changedTouches[0].pageX;
            pressedObj = this; // 记录被按下的对象 

            // 记录开始按下时的点
            var touches = event.touches[0];
            start = { 
                x: touches.pageX, // 横坐标
                y: touches.pageY  // 纵坐标
            };
        });

        lines[i].addEventListener('touchmove',function(e){
            // 计算划动过程中x和y的变化量
            var touches = event.touches[0];
            var delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            };

            // 横向位移大于纵向位移，阻止纵向滚动
            if (Math.abs(delta.x) > Math.abs(delta.y)) {
                event.preventDefault();
            }
        });

        lines[i].addEventListener('touchend', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.changedTouches[0].pageX - lastXForMobile;
            if (diffX < -150) {
                $(pressedObj).animate({marginLeft:"-132px"}, 500); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 500); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 150) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }

    // 网页在PC浏览器中运行时的监听
    for (var i = 0; i < len; ++i) {
        $(lines[i]).bind('mousedown', function(e){
            lastX = e.clientX;
            pressedObj = this; // 记录被按下的对象
        });

        $(lines[i]).bind('mouseup', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.clientX - lastX;
            if (diffX < -150) {
                $(pressedObj).animate({marginLeft:"-132px"}, 500); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 500); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 150) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }
});

</script>

<style scoped>

.top{height:.5rem;background: #fff;color: #75a739;font-size: .16rem;border-bottom: .01rem solid #d8d8d8;}
.redact{font-size: .12rem!important;}
.specific {
    height: .4rem;
    padding: 0 0.1rem;
    font-size: .14rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #d8d8d8;
    line-height: .4rem;
 }
.line-wrapper { width: 100%; height: 1rem; overflow: hidden; font-size: .16rem; border-bottom: 1px solid #aaa; position: relative;}
.line-scroll-wrapper { white-space: nowrap; height: 1rem; clear: both; }
.line-btn-delete { float: left; width: 132px; height: 1rem; }
.line-btn-delete button { width: 100%; height: 100%; background: red; border: none; font-size: 24px; font-family: 'Microsoft Yahei'; color: #fff; }
.line-normal-wrapper { display:flex; line-height: 100px; float: left; padding-top: 10px; padding-bottom: 10px; justify-content: space-between;}
.line-normal-icon-wrapper {  top: auto;right: .1rem;bottom: 0.2rem;left: auto;position: absolute; display: -webkit-box;height: .4rem; }
 .plus {display: inline-block;}
 .plus>i,.icon-jian {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border: .01rem solid #bfbfbf;
    border-radius: 100%;
    font-size: .16rem;
    line-height: .17rem;
    color: #ff8000;
    text-align: center;
    font-style: normal;
}
.num{width: .3rem;display: inline-block;text-align: center;}
.line-normal-avatar-wrapper { width: 100px; height: 124px; margin-left: 12px; }
.line-normal-avatar-wrapper img { width: .6rem; height: .6rem; border-radius: .04rem; }
.line-normal-left-wrapper {  overflow: hidden; display: flex;justify-content: space-between;}
.line-normal-info-wrapper {  display: flex;flex-direction: column;}
.line-normal-user-name {margin: 0 0 .05rem; height: .3rem; font-size: .14rem;line-height: .15rem;font-weight: 400;color: #3a3a3a;display: -webkit-box;} 
.line-normal-msg { height: .15rem;margin: 0 0 .05rem;font-weight: 400;font-size: .1rem;line-height: .15rem;color: #878787; }
.line-normal-msg span{margin-right: .1rem;font-size: .12rem;}
.line-normal-time { font-size: .12rem;height: .2rem;margin-top: -0.25rem}
 .line-normal-time small {font-size: .1rem;}
  .line-normal-time span{color: #FF8000}
</style>
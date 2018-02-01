<template>
	<div class="wrap">
		<div class="wrap1">
			
				<router-link to="/">X</router-link>
				<a>选择收货地址</a>
				<span>新增地址</span>
		</div>
		<section style="width:100%;height:100%;">
			<div class="nav">
				<div class="nav1">
					<span>
						<em>上海</em>
						
					</span>
					<div class="nav2">
						<i class="iconfont icon-sousuo"></i>
						<input type="tel" name="" id="" placeholder="请输入收货地址" />
					</div>
				</div>
			</div>
			<div class="active">
				<p>当前地址</p>
			</div>
			
			<div class="art">
				<p>北京市昌平区沙河镇沙河二毛生活小区...
					<i class="iconfont icon-jiahao">重新定位</i>
					
				</p>
				
			</div>
			
			<div class="active">
				<p>附近地址</p>
			</div>
			<div class="aa">山西面师傅</div>
			<div class="aa">川香居</div>
			<div class="aa">穆斯林美食</div>
			<div class="aa">好适口</div>
			<div class="aa">更多地址
				<i class="iconfont icon-xiangzuo"></i>
			</div>
			
			
		</section>
	
	</div>
</template>

<script>
	  export default {
	    name: 'myhome',
	    data () {
	      return {
	        
	      }
	   }
  	}
</script>

<style scoped>
	
	.wrap1{width:100%;height:0.45rem;font-size:0.12rem;line-height: 0.44rem;color:#55A532;text-align: center;display: flex;justify-content: space-between;position: fixed;}
	.wrap a{color:#55A532;font-size:0.18rem;padding-left: 0.1rem;}
	.wrap span{padding-right:0.05rem;}
	section{flex: 1; height: 100%; padding-top: 0.45rem;padding-bottom: 0.43rem;}
	.nav{width:100%;height:0.43rem;padding:0 .1rem .1rem ;}
	.nav .nav1{height:0.33rem;background: #eee;border-radius: 0.04rem;display: flex;}
	.nav .nav1 span{width:0.8rem;height:0.33rem;font-size:0.14rem;top:0.45rem;left:.1rem;text-align: center;line-height: .32rem;border-right:1px solid #CCCCCC ;}
	.nav .nav1 span em{font-style: normal;}
	.nav .nav1 .nav2{width:1rem;height:0.33rem;display: flex;line-height: 0.32rem;}
	.nav .nav1 .nav2 i{padding-left: 0.1rem;}
	.nav .nav1 .nav2 input{border:none;background: none;padding-left:0.1rem;}
	section .active{width:100%;height:0.4rem;background: #f5f5f5;line-height: 0.4rem;border-top:1px solid #DCDCDC ;}
	section .active p{font-size: 0.12rem;padding-left: 0.08rem;color:#878787;}
	section .art{width:100%;height:0.5rem;}
	section .art p{line-height: 0.5rem;padding-left: 0.08rem;font-size:0.12rem}
	section .art p i{color:#FF8000;font-size:0.12rem;padding-left: 0.25rem;}
	section .aa{height:0.5rem;width:100%;line-height: 0.5rem;padding-left: 0.1rem;font-size:0.12rem;border-bottom: 1px solid #EEEEEE;color:#878787}
	section .aa i{padding-left: 75%;}
</style>
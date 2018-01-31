<template>
   <div class="hello" >
   	<indexhead></indexhead>
   	<div class="hellos">
	   	 <template v-if="lunbo">
	   		<div class="lunbos">
		   	    <mt-swipe :auto="4000">
				  <mt-swipe-item v-for="item in lunbo.mainBanners[0].content"><img :src="item.image" width="100%"></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="banner">
				<a href="#" v-for="item in lunbo.mainBanners[2].content">
					<img :src="item.image" alt="" width="100%">
				</a>
			</div>
			<div class="section1">
				<a href="#"><img :src="lunbo.mainBanners[4].content[0].image" alt="" width="100%"></a>
			</div>
			<div class="section2">
				<a href="#"><img :src="lunbo.mainBanners[5].content[0].image" alt="" width="100%"></a>
			</div>

		
			<div class="section4">
				<div class="manys">
					<div v-for="item in lunbo.mainBanners[7].content" class="many-more">
						<router-link :to="{name:'detail', params:{fid: item.target_id}}">
							<img :src="item.image" alt="" width="100%;">
							<p>{{item.title}}</p>
							<div class="price"> <span class="money">{{item.price}}/<em>{{item.volume}}</em></span> <i class="iconfont">&#xe726;</i></div>
						</router-link>
					</div>
				</div>
			</div>
			 <div class="section2">
				<a href="#"><img :src="lunbo.mainBanners[8].content[0].image" alt="" width="100%"></a>
			</div>
			<div class="section6">
				<a href="#"><img :src="lunbo.mainBanners[9].content[0].image" alt="" width="100%"></a>
			</div>
			 <div class="section4">
				<div class="manys">
					<div v-for="item in lunbo.mainBanners[10].content" class="many-more">
						<router-link :to="{name:'detail', params:{fid: item.target_id}}">
							<img :src="item.image" alt="" width="100%;">
							<p>{{item.title}}</p>
							<div class="price"> <span class="money">{{item.price}}/<em>{{item.volume}}</em></span> <i class="iconfont">&#xe726;</i></div>
						</router-link>
					</div>
				</div>
			</div>
			<div class="section2">
				<a href="#"><img :src="lunbo.mainBanners[11].content[0].image" alt="" width="100%"></a>
			</div>
			<div class="section6">
				<a href="#"><img :src="lunbo.mainBanners[12].content[0].image" alt="" width="100%"></a>
			</div>
			<div class="section4">
				<div class="manys">
					<div v-for="item in lunbo.mainBanners[13].content" class="many-more">
						<router-link :to="{name:'detail', params:{fid: item.target_id}}">
							<img :src="item.image" alt="" width="100%;">
							<p>{{item.title}}</p>
							<div class="price"> <span class="money">{{item.price}}/<em>{{item.volume}}</em></span> <i class="iconfont">&#xe726;</i></div>
						</router-link>
					</div>
				</div>
			</div>
			<div class="section6">
				<a href="#"><img :src="lunbo.mainBanners[14].content[0].image" alt="" width="100%"></a>
			</div>
			<div class="section4">
				<div class="manys">
					<div v-for="item in lunbo.mainBanners[15].content" class="many-more">
						<router-link :to="{name:'detail', params:{fid: item.target_id}}">
							<img :src="item.image" alt="" width="100%;">
							<p>{{item.title}}</p>
							<div class="price"> <span class="money">{{item.price}}/<em>{{item.volume}}</em></span> <i class="iconfont">&#xe726;</i></div>
						</router-link>
					</div>
				</div>
			</div>
		    <div class="section6">
				<a href="#"><img :src="lunbo.mainBanners[16].content[0].image" alt="" width="100%"></a>
			</div>
				<div class="section4">
				<div class="manys">
					<div v-for="item in lunbo.mainBanners[17].content" class="many-more">
						<router-link :to="{name:'detail', params:{fid: item.target_id}}">
							<img :src="item.image" alt="" width="100%;">
							<p>{{item.title}}</p>
							<div class="price"> <span class="money">{{item.price}}/<em>{{item.volume}}</em></span> <i class="iconfont">&#xe726;</i></div>
						</router-link>
					</div>
				</div>
			</div>
			<div class="section6">
				<a href="#"><img :src="lunbo.mainBanners[18].content[0].image" alt="" width="100%"></a>
			</div>
			<div class="section4">
				<div class="manys">
					<div v-for="item in lunbo.mainBanners[19].content" class="many-more">
						<router-link :to="{name:'detail', params:{fid: item.target_id}}">
							<img :src="item.image" alt="" width="100%;">
							<p>{{item.title}}</p>
							<div class="price"> <span class="money">{{item.price}}/<em>{{item.volume}}</em></span> <i class="iconfont">&#xe726;</i></div>
						</router-link>
					</div>
				</div>
			</div>
			<div class="section6">
				<a href="#"><img :src="lunbo.mainBanners[20].content[0].image" alt="" width="100%"></a>
			</div>
			<div class="section3" v-for="item in lunbo.mainBanners[21].content">
			    <router-link :to="{name:'detail', params:{fid: item.target_id}}" class="item">
					<div class="img-box"> 
						<img :src="item.image" alt="">       
					 </div> 
					 <div class="desc"> 
					 	<h5>{{item.title}}</h5> 
					 	<p>{{item.subtitle}}</p> 
					 	 <div class="price">
					 	  <span class="money">￥{{item.price}}/<em>{{item.volume}}</em></span> 
					 	  <i class="iconfont">&#xe726;</i> 
					 	</div> 
					 </div> 
					</router-link>
			</div> 
 
			<div style="width: 100%;height: 0.5rem"></div>	
		</template> 
    </div>
    <indexfoot></indexfoot>
   </div>
</template>

<script>
import indexhead from './header1'
import indexfoot from './footer1'
import axios from 'axios'
export default {
  name: 'HelloWorld1',
  components:{
  	indexhead,
  	indexfoot,
  },
  data:function(){
  	return{
  		lunbo:null
  	}
  },
  mounted(){
  	axios.get("/v3/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11623&ad_code=110114&tab_id=").then((res) =>{
  		console.log(res.data.data);
  		this.lunbo = res.data.data.banner;
  		//console.log(res.data.data.banner.mainBanners[0].content);
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/css/iconfont.css");
a{display: block;font-size: 0.14rem;color: #000;}
.hello{
 width: 100%;height: 100%;
}
.hellos{width: 100%;display: flex;flex-direction: column;}
.lunbos{height: 1.5rem;}
.banner{width: 100%;display: flex;justify-content: space-around;}
.banner a{width: 48%;display: inline-block;}
.banner a img{display: block;}
.section1{height: 0.8rem;}
.section2{height: 0.34rem;}

.item{
	padding: .20rem .12rem 0 .25rem;
    height: 1.6rem;
    border-top: .005rem solid rgba(220,220,220,.2);
    display: flex;
    justify-content: space-around;
}
.item img{
    width: 1.2rem;
    height: 1.2rem;
}
 h5 {
    font-size: .14rem;
    margin-bottom: .05rem;
}
.desc{padding-top: 0.1rem}
.desc p {
    color: #878787;
    margin-bottom: .37rem;
}
 .money {
    display: block;
    color: #ff8000;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price{display: flex;}
.price i{font-size: 0.2rem;color: #ff8000;}
 .icon-searchplus {
    position: absolute;
    top: -.09rem;
    right: 0;
    width: .74rem;
    height: .4rem;
    text-align: right;
    line-height: .35rem;
}
.section4{width: 100%;height: 1.3rem;padding-left: 0.1rem;overflow: hidden;}
.manys{overflow: scroll;white-space: nowrap; width:100%;height: 1.5rem;}
.manys p{width: 80%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.many-more{width: 25%;display: inline-block;margin-right: 0.1rem;font-size: 0.1rem}
.section5{height: 1.4rem;margin-left: 24%;}
.section6{margin-top: 0.1rem}
</style>

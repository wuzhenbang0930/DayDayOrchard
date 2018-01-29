<template>
	
  <div class="classify">
     <div class="seach">
     	<div class="zi">
     		<i class="iconfont icon-sousuo"></i>
     		奇异果 
     	</div>
     </div>
     <div class="seachmain">
     	<ul>
     		<li v-for='item in arr_item' v-on:click="GetId(item.id)">
     			{{item.name}}
     		</li>
     	</ul>
     		<div class="listmain">
     			<h1>{{this.arr_name.name}}</h1>
     			<div class="flex1">
     				<dl v-for='itee in arr_listmain'>
	     				<dt><img :src="itee.class_photo" alt=""></dt>
	     				<dd>{{itee.name}}</dd>
     				</dl>
     			</div>
     			
 			 </div>
     </div>
<indexfoot></indexfoot>

  </div>

  
</template>

<script>
import indexfoot from './footer1'
import axios from 'axios'
export default {
  name: 'classify',
  components:{
  	indexfoot,
  },
  data:function(){
  	return{
  		arr_item : [],
  		arr_listmain : [],
  		arr_name:{}
  	}
  },
 
  mounted(){
  	axios.get('/v3/v3/product/category_list?store_id_list=3&class_id=').then((res) => {
 				this.arr_item = res.data.data.classOneGroup
 			})
  	this.GetId('303')
  },

 	methods:{
 		GetId(id){
 			console.log(id)
 			console.log(this.$route.params)
 			axios.get(`/v3/v3/product/category_list?store_id_list=3&class_id=${id}`).then((res) =>{
 				this.arr_listmain  = res.data.data.childrenList[0].class3Group
 				this.arr_name = res.data.data.childrenList[0].class2Name
 				console.log(this.arr_name.name)

 			})
 			
 		}
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classify{
 	  display: flex; height: 100%;flex-direction: column;
}
a{
	text-decoration: none
}
#app .header{
	display: none
}
.seach{
	width: 100%; height:.35rem/* 44px */;
	font-size: .12rem/* 12px */; text-align: center;background: #fff;  border-bottom: .01rem/* 1px */ solid #ccc; padding-top: .08rem/* 8px */; margin-top: -.08rem/* 8px */; position: fixed; top: 0
}
.seach .zi {
	margin: .08rem;  background: #eee;	border-radius: 0.05rem/* 10px */;color: #878787
}
.zi i{
	font-size: .14rem/* 12px */ !important;
}
.classify .seachmain{
	flex: 1; height: 100%; display: flex; position: fixed;right: 0; margin-left: .8rem/* 80px */;top: .36rem/* 36px */
}
.seachmain ul:nth-of-type(1){
	width: .8rem; font-size: 12px; background: #f5f5f5; text-align: center; position: fixed; left: 0; top: .36rem/* 35px */;
}
.seachmain ul:nth-of-type(1) li{
	height: .42rem/* 42px */; width: .78rem/* 78px */;  line-height: .42rem/* 42px */; font-size: 15px
}
.seachmain .listmain{
	flex: 1;  padding :.1rem .1rem .18rem .1rem; display: flex; flex-direction: column;
}
.seachmain h1{
	height: .3rem/* 30px */; font-weight: 400; line-height: .3rem/* 30px */ ; text-align: center ; font-size: 14px;
}
.listmain .flex1{
	display: flex; justify-content: space-between;flex-wrap: wrap;overflow: auto
}
.listmain .flex1 dl{
	width: 33%; padding-bottom: .2rem/* 20px */; height: 20%; text-align: center;
}
.listmain dl dt img{
	width: 100%; border: 0; height: 100%
}
.listmain dl dd{
	font-size: .13rem/* 13px */; margin-top: 0.04rem; color: #3a3a3a;
}
</style>

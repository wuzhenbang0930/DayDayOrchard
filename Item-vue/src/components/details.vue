<template>
	<div class="particulars" v-if="details">
			<nav>
					<div class="back">
					    <a href="javascript:history.go(-1)" class="iconfont">&#xe51b;</a>
				    </div>
				    <div class="tab">
						<ul class="tab-menu">
							<li class="active"><router-link :to="{name:'detail', params:{fid: details.productItem[0].id}}">商品</router-link></li>
							<li><router-link :to="{name:'details', params:{fid: details.productItem[0].id}}">详情</router-link></li>
							<li><router-link :to="{name:'detaila', params:{fid: details.productItem[0].id}}">评价</router-link></li>
						</ul>
				    </div>
				    <div class="more">
				    	<i class="iconfont">&#xe637;</i>
				    </div>
				</nav>
			<div v-html="details.templateInfo.desc_mobile" class="details-desc">
			</div>
            <foots></foots>
	</div>
</template>

<script>
import foots from "./detail-footer"
import axios from "axios"
export default {
  name: 'particulars',
  data:function(){
    return{
      details:null
    }
  },
  components:{
    foots,
  },
  mounted(){
  	//console.log(this.$route.params.fid);
    var id=this.$route.params.fid;
    axios.get(`/v3//v3/product/detail?store_id_list=3&product_id=${id}&store_id=3&delivery_code=3`)
      .then((res) => {
        console.log(res.data.data);
        this.details = res.data.data;
      })
  }
}
</script>
<style scoped>
@import url("../assets/font/iconfont.css");
nav {
    background: #fff;
    color: #75a739;
    height: .45rem;
    line-height: .43rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: .01rem solid #d8d8d8;
    font-size: 0.14rem;
    display: flex;
    z-index: 99;
}
.back{width: 25%;padding-left: 0.1rem;}
.back a{font-size: 0.2rem;color:#75a739 }

.tab{width: 50%;}
.tab ul{display: flex;justify-content: space-around;}
.tab ul li a{color: #000;}
.tab ul li:nth-child(2) a{color: #75a739}
.tab ul li:nth-child(2){border-bottom: 2px solid #75a739}
.more{width: 25%;text-align: right;padding-right: 0.1rem;}
.details-desc{margin-top: .45rem;font-size: .14rem}

</style>
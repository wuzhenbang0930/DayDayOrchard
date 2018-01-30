<template>
  <div class="root">
    <header>
      <nav>
        <a href="" class="iconfont icon-xiangzuo"></a>
        <a href="">{{arr_name}}</a>
        <a href="" class="iconfont icon-sousuo"></a>
      </nav>
      <ul>
        <li v-for='item in arr_nav1' @click='ggg(item.id)'>{{item.name}}</li>
      </ul>
      <ul>
        <li>综合</li>
        <li>销量</li>
        <li>价格</li>
      </ul>
    </header>
    <div class="rootmain">
      <router-link :to="{name:'detail', params:{fid: itemm.id}}" class="itemee" v-for="itemm in arr_list" >
         <img class="good-img" :src="itemm.bphoto">  
         <dl class=""> 
              <dt>{{itemm.product_name}}</dt> 
              <dd>{{itemm.product_desc}}</dd> 
              <dd>{{itemm.volume}}</dd> 
              <div class="count1"> 
                <small>￥</small>
                <big>{{itemm.price}}</big>
                <small>.9</small>  
                <span style="background: #FF8000">明日达  </span>
              </div> 
          </dl>  
          <div class="count">
              <span class="num" style="display: none;">1</span>
              <span data-id="29034" class="plus">
                <i class="iconfont icon-jiahao"></i>
              </span>
          </div>  
       <em>已省10元</em> 
      </router-link>
    </div>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'footer1',
  data () {
    return {
      arr_name : [],
      arr_nav1 : [],
      arr_list : []
    }
  },
  mounted () {
   
    console.log(this.$route.params.fid)
    var id = this.$route.params.fid
    axios.get(`/v3/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=${id}&sort_type=1&tms_region_type=1`).then((res) =>{
      console.log(res)
      this.arr_name = res.data.data.fatherClass.name;
      this.arr_nav1 = res.data.data.brotherClass
      this.arr_list = res.data.data.productGroup
    })
  },
  methods:{
    ggg(id){
      console.log(id);
      axios.get(`/v3/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=${id}&sort_type=1&tms_region_type=1`).then((res) =>{
          console.log(res)
          this.arr_name = res.data.data.fatherClass.name;
          this.arr_nav1 = res.data.data.brotherClass
          this.arr_list = res.data.data.productGroup
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/swiper.css');

header{
  height: 1.1rem/* 110px */; background: rgba(248, 248, 248, .95); box-shadow: inherit; position: fixed; top: 0; font-size: .15rem/* 12px */; width: 100% ;  margin: .08rem 0; z-index: 9999
}
header nav {
  height: .45rem/* 45px */; border-bottom: .01rem solid #d8d8d8; line-height: .43rem/* 43px */; display: flex; justify-content: space-between
}
header nav a {
  display: block; color: #75a739
}
header nav a:nth-of-type(1){
    font-size:.22rem/* 15px */ !important; padding-left: .07rem/* 7px */; height: .81rem/* 81px */
}
header nav a:nth-of-type(3){
  font-size: .22rem/* 22px */ !important; margin-right: 0.08rem
}
header ul:nth-of-type(1){
  height: .36rem/* 36px */;     overflow: scroll;
    white-space: nowrap;
    width: 100%;  line-height: .36rem/* 36px */;

}
header ul:nth-of-type(1) li{
  width: .81rem; height: auto; font-size: 15px; display: inline-block; color: #888888 ;text-align: center; 
}

header ul:nth-of-type(2){
  height: .36rem/* 36px */; display: flex; justify-content: space-around;line-height: .34rem/* 36px */; background: #f5f5f5
}

header ul:nth-of-type(2) li{
  font-size: .12rem/* 12px */; color: #888888
}
.rootmain{
  flex: 1; height: auto;  width: 100%;margin-top: 1.25rem/* 125px */; overflow: hidden
}

.itemee{
  padding: .1rem/* 10px */; border-bottom: .01rem/* 1px */ soild #d8d8d8;
  color: #3a3a3a; font-size: .14rem/* 14px */; display: flex; position: relative
}
.good-img{
  width: 1.05rem/* 105px */; height: 1.05rem/* 105px */; margin-right: .1rem/* 10px */; border-radius: .04rem/* 4px */
}
.itemee dl{
  font-size: .12rem;
}

.count1{
  margin-top: 0.3rem/* 8px */
}
.itemee em{
  position: absolute; top: .1rem/* 10px */ ;left: .1rem/* 10px */; font-style: normal; padding: 0 .05rem/* 5px */; font-size: .1rem/* 10px */; height: .16rem/* 16px */; height: .16rem/* 16px */;color: #fff ; border-radius: .04rem/* 4px */ 0 0;z-index: 99 ; background: #ff4848
}
.count{
  width: .74rem/* 74px */; line-height: .22rem/* 22px */; height: .43rem/* 43px */;position: absolute ;right: 0; bottom: 0; text-align: right;
}
.count .plus{
  right: -.1rem/* 10px */; padding: .1rem/* 10px */; position: absolute; top: 0; margin-right: .1rem/* 10px */; 
}
.count .plus i{
  font-size: .25rem/* 20px */
}
  
</style>

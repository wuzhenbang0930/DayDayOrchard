<template>
  <div class="sousuo">
      <div class="sousuotop">
          <div class="sousuokuang"> 
            <span class="sousuobar">
               <i class="iconfont icon-xiangzuo"></i>
            返回
            </span>
            <div class="kuang">
              <i class="iconfont icon-sousuo"></i>
              <input type="text" class="wenzi" placeholder="新鲜水果、生鲜 " v-on:keyup='up($el)' ref="pwdNum">
            </div>
            
            <input type="button" value="搜索" class="btn" >
          </div>
      </div>
      <div class="sousuomain">
        <ul class="none" v-if="flag">
          <li v-for="(item , index) in arr_li"><a class="itee" v-on:click="router(index)" ref="num">{{item}}</a></li>
        </ul>

        <div class="sousuolist" v-if="flag1">
          <h3>热门搜索</h3>
          <div class="con">
            <a href="" v-for="item in arr_item" class="lili">{{item}}</a>
          </div>
          
        </div>
        <div class="rootmain">
      <router-link :to="{name:'detail', params:{fid: itemm.id}}" class="itemee" v-for="itemm in arr_list" >
         <img class="good-img" :src="itemm.photo">  
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
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'sousuo',
  data (){
    return{
      arr_item : [],
      arr_li:[],
      flag : false,
      flag1 :true,
      arr_list : []
    }
  },
  mounted(){
    axios.get("/v3/v3/search/get_hot_keyword").then((res) =>{
      console.log(res.data.data)
      this.arr_item = res.data.data
    })
  },
   methods:{
        up(){
          console.log( this.$refs.pwdNum.value)
          var hh = this.$refs.pwdNum.value;
          axios.get(`/v3/v3/search/keyword?keyword=${hh}`).then((res)=>{
            console.log(res.data.data)
            
            if(res.data.data.length > 0){
              this.flag = !this.flag;
              this.flag1 = !this.flag1
            }else if(hh == ""){
              this.flag1 = true
            }
            this.arr_li = res.data.data;
            
            
          })
         
        },
        router(index){
          console.log(this.$refs.num[index].innerHTML)
          var word = this.$refs.num[index].innerHTML
          this.flag = false
          this.flag1 = false
          axios.get(`/v3/v3/search/product?keyword=${word}&store_id_list=3&tms_region_type=1&page_size=50&curr_page=1`).then((res)=>{
            console.log(res.data.data)
            this.arr_list = res.data.data

          })
        }
   }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sousuotop{
     width: 100%;   font-size: .12rem/* 12px */;  position: fixed; top: 0 ; border-bottom: .01rem/* 1px */ solid #ccc; z-index: 999; background: #fff
  }
  .sousuokuang{
    height: auto; padding: .1rem/* 10px */ 0;  display: flex; justify-content: space-between; width: 100%; 
  }
  .kuang{
    height: .32rem/* 32px */; border-radius: .05rem/* 5px */; background: #eee; color: #878787; font-size: .14rem/* 14px */; line-height: .32rem/* 32px */; flex: 1 ;display: flex;margin: 0 .1rem/* 10px */;
  }
  .kuang i{
    margin: 0 .1rem/* 10px */; 
  }
  .none{
    height: 100%;
  }
  .none li{
    font-size: .16rem/* 16px */; line-height: 1; 
  }
  .none li .itee{
    padding: .16rem/* 16px */ 0; border-bottom: .01rem/* 1px */ solid #eee; color: #3a3a3a; width: 100%; display: block; font-size: .16rem/* 16px */;
  }
  .sousuobar{
    line-height: .32rem/* 32px */; width: auto; color: #64a131
  }
  .wenzi{
    max-width: 100%; padding: 0 .3rem/* 30px */ 0 0; border: none; height: 100%; width: 100%; background: #eee; border-radius: .05rem/* 3px */
  }
  .btn{
    height: .32rem/* 32px */; border: none; background: #fff; padding: 0 .06rem/* 6px */;color: #64a131
  }
  .sousuomain{
    flex: 1; height: 100%; padding: 0 .1rem/* 10px */; width: 100%;
  }
  .sousuomain h3{
    font-size: .14rem/* 14px */; color: #878787; font-weight: normal;
  }
  .sousuolist{
    margin-top: .2rem/* 20px */;
  }
  .con{
    height: .2rem/* 20px */
  }
  .sousuomain .lili{
    font-size: .14rem/* 14px */;color: #3a3a3a; display: inline-block; padding: .07rem/* 7px */ .08rem/* 8px */;
    margin: .1rem/* 10px */ .04rem/* 4px */ 0; background: #f1f1f1; border-radius: .05rem/* 5px */; 
  }

  .rootmain{
  flex: 1; height: auto;  width: 100%; overflow: hidden;
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

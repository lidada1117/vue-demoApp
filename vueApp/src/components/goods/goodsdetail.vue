<template>
    <div>
        <!-- 调用全局header -->
        <nav-vue text="商品详情"></nav-vue>
        
        <div class="outer-swiper">
            <div class="swiper">

                <!-- 调用全局轮播图 -->
                <lunbo-vue :url="url"></lunbo-vue>
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">
                    {{lists.title}}
                </span></li>
                <li class="price-li">市场价：
                    <s>￥{{lists.high}}</s> 销售价：<span>￥{{lists.low_price}}</span></li>
                <li class="number-li">购买数量：<span @click="jianhao">-</span><span>{{num}}</span><span @click="jiahao">+</span></li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="gouwuche">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <!-- 小球 -->
        <transition name="ball" @after-enter="afterEnter">
            <div class="ball" v-if="show"></div>
        </transition>

        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：23564451</li>
                <li>库存情况：{{lists.kucun}}件</li>
                <li>上架时间：{{lists.add_time}}</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button @click="tuwen" type="primary" size="large" plain>图文介绍</mt-button>
                </li>
                <li>
                    <mt-button @click="pinglun" type="danger" size="large" plain>商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import connect from "../../comment/connect.js"; //子组件向父组件传值
import prods from "../../comment/prodstools";

    export default {
  data() {
    return {
        lists:{},
        url:"",
        num:1, //购物数量
        show: false, //小球的
    };
  },
  components: {},
  methods:{
      jianhao(){
          this.num--;
          if(this.num <= 1){
              this.num = 1;
          }
      },
      jiahao(){
          this.num++;
          if(this.num >= this.lists.kucun){
              this.num = this.lists.kucun;
          }
      },
      gouwuche(){
          connect.$emit('gouwuche', this.num);
          this.show = true;

          //将数据添加到localstroage
          prods.add({
              id: this.lists.id,
              num: this.num
          });

      },
      afterEnter(){
          this.show = false;
      },
      pinglun(){
      let id = this.$route.query.id;

      this.$router.push({
          name:'goodsPl',
          query:{id}
      });
      },
      tuwen(){
    let id = this.$route.query.id;

    this.$router.push({
          name:'goodsJieshao',
          query:{id}
      });
      }

  },
  created(){
      let id = this.$route.query.id;
      this.url = "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/photo/detailimg/" + id;
      
      //商品参数
      this.$axios.get("https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/goods/getinfo/" + id)
      .then((res) => {
          this.lists = res.data.message;
      }).catch((err) => {
          
      });
  }
};

</script>
<style scoped>
.ball-enter-active {
    animation: bounce-in 0.3s;
}

@keyframes bounce-in {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(140px, -50px, 0);
    }
    75% {
        transform: translate3d(150px, 0px, 0);
    }
    100% {
        transform: translate3d(120px, 300px, 0);
    }
}

.swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
}

.outer-swiper,
.product-desc,
.product-props,
.product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
}


/*请ulpadding*/

.outer-swiper ul,
.product-desc ul,
.product-props ul,
.product-info ul {
    padding: 0;
}

.product-desc ul li,
.product-props ul li,
.product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
}

.product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
}

.product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.product-desc ul,
.product-info ul,
.product-props ul {
    padding-left: 10px;
}

.price-li span {
    color: red;
    font-size: 25px;
}

.price-li s {
    margin-right: 16px;
}


/*加减*/

.number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
}


/*商品参数*/

.product-props ul >:nth-child(1) {
    text-align: left;
}

.product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
}

.product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
}

.number-li span {
    text-align: center;
}

.number-li >:nth-child(2) {
    width: 40px;
}

.ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
}
</style>

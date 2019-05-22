<template>
    <div class="tmpl">
      <nav-vue text="购物车页面"></nav-vue>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(data, index) in datas" :key="data.id">
                    <mt-switch v-model="data.isKaiguan">

                    </mt-switch>
                    <img :src="data.img_url">
                    <div class="pay-calc">
                        <p>{{data.title}}</p>
                        <div class="calc">
                            <span>￥{{data.low_price}}</span>
                            <span @click="jianshao(index)">-</span>
                            <span>{{data.num}}</span>
                            <span @click="zengjia(index)">+</span>
                            <a href="javascript:;" @click="shanchu(index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{jiage.num}}件，总价￥{{jiage.sum}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large" >去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>

import prods from "../../comment/prodstools.js";
import connect from "../../comment/connect.js";

export default {
  data() {
    return {
      datas:[],
      isKaiguan:'',
      num:'',
      popupVisible:''
    }
  },
  components: {

  },
  computed:{
      jiage(){
          let sum = 0;
          let num = 0;
          this.datas.forEach((ele, index) =>{
              if(ele.isKaiguan){
                  sum += ele.num * ele.low_price;
                  num += ele.num;
              }
          });
          return{
              sum, num
          }
      }
  },
  methods:{
      jianshao(i){
          if(this.datas[i].num <= 1) return;

          this.datas[i].num--;

          connect.$emit('gouwuche', -1);
          prods.add({
              id: this.datas[i].id,
              num:-1
          });

      },
      zengjia(i){
          this.datas[i].num++;
          connect.$emit('gouwuche', 1);
         prods.add({
              id: this.datas[i].id,
              num:1
          });
      },
      shanchu(i){
          //先删除localstroage中的
          let did = this.datas[i].id;
          prods.delete(did);

        //改变小球
          connect.$emit('gouwuche', -this.datas[i].num);

        //在删除内存中的
        this.datas.splice(i,1);
      },
  },
  created(){
    let str = Object.keys(prods.getAll()).join(',');   //获取localstroage里面的所有key

    let url = "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/goods/getshop/"

          //获取localstroage
    
    // for(var i = 0; i < str.length; i++){
    //     if(str[i] === ''){
    //         alert("抱歉还没有商品！");
    //     }
    // }

    if(Object.keys(prods.getAll()).length === 0){
        return;
    }

    this.$axios.get(url + str).then((res) => {
      this.datas = res.data.message;

    let locals = prods.getAll();

      this.datas.forEach((ele,index) => {
        // ele.num = locals[ele.id];
        // ele.isKaiguan = true;

        this.$set(ele, 'num', locals[ele.id]);
        this.$set(ele, 'isKaiguan', true);

      });
    }).catch((err) => {
    });

  }
}
</script>
<style scoped>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>

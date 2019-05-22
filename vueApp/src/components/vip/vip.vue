<template>
  <div>
      <nav-vue text="登录页面"></nav-vue>
     
		<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model="name">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="password">
				</div>
			</form>

			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="check">登录</button>
		
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>

     
  </div>
</template>

<script>
export default {
  data() {
    return {
     name:'',
     password:'',

    }
  },
  components: {

  },
  created(){
    
  },
  computed: {
    
    },
methods:{
     check(){
       	let name = this.name;
        let password = this.password;
        
        if(name == '' || password == ''){
          this.$message({
            message:'账号或者密码为空',
            type: 'error'
          });

          return;
        }

        // let data = {"name": this.name, "password": this.password };
        this.$axios.get('https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/denglu')
        .then((res) => {
          let reslut = res.data.message[0];

          if(reslut.name == this.name && reslut.password == this.password){
            this.$router.push({
              name:'shop'
            });
          }else{
             this.$message({
            message:'账号或者密码错误',
            type: 'error'
          });
          }
        }).catch((err) => {
          
        });
     }
    }
}
</script>

<style scoped>
	.area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
			}
			
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			
			.mui-input-group label {
				width: 22%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			
			.mui-content-padded {
				margin-top: 25px;
			}
			
			.mui-btn {
				padding: 10px;
			}
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				/*-webkit-filter: grayscale(100%); */
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
			}
</style>

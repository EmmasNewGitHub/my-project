<template>
  <div>
    <el-container class="wrapper">
      <el-main class="section">
        <div class="changeinfo-bg"></div>
        <el-card class="box-card changeinfo-card">
          <div class="text item">
            <p class="changeinfo-title">个人信息</p>
            <el-row :gutter="10">
              <el-col :span="8" class="text-right">
                <p>
                  用户名：
                </p>
              </el-col>
              <el-col :span="16" class="text-left">
                <p>
                  {{userinfo.userName}}
                </p>
              </el-col>
            </el-row>
						<el-row :gutter="10">
							<el-col :span="8" class="text-right">
							  <p>
							    创建时间：
							  </p>
							</el-col>
							<el-col :span="16" class="text-left">
							  <p>
							    {{userinfo.createTime}}
							  </p>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8" class="text-right">
							   <p>
							     账号邮箱：
							   </p>
							 </el-col>
							 <el-col :span="16" class="text-left">
							   <p>
							     {{userinfo.email}}
							   </p>
							 </el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8" class="text-right">
							  <p>
							    性别：
							  </p>
							</el-col>
							<el-col :span="16" class="text-left">
							  <p>
							    {{showsex}}
							  </p>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8" class="text-right">
							  <p>
							    用户id：
							  </p>
							</el-col>
							<el-col :span="16" class="text-left">
							  <p>
							    {{userinfo.id}}
							  </p>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8" class="text-right">
							  <p>
							    账号积分：
							  </p>
							</el-col>
							<el-col :span="16" class="text-left">
							  <p>
							    {{userinfo.jifen}}
							  </p>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8" class="text-right">
							  <p>
							    手机号：
							  </p>
							</el-col>
							<el-col :span="16" class="text-left">
							  <p>
							    {{userinfo.phone}}
							  </p>
							</el-col>
						</el-row>

        

            <el-button type="psw" @click="gopsw" style="font-size: 22px;">
              设置密码
            </el-button>

            <el-button type="info" @click="back" style="font-size: 22px;">
              <i  style="font-size: 22px;"></i> 返回
            </el-button>
          </div>
        </el-card>
      </el-main>
    </el-container>
    <el-footer class="footer text-center">
      <footbar></footbar>
    </el-footer>
  </div>
</template>

<script>
  import footbar from "@/components/footbar.vue";
  import store from './../store';
  export default {
    data() {
      return {
        userinfo: {
          
        }
      }
    },
    components: {
      footbar,
    },
    mounted(){
      this.$store.commit("setMine");
      // this.axios.get("http://localhost:9151/user/userDetail")
      // this..get("http://localhost:9151/user/userDetail")
      this.$http.get("/user/userDetail") 
      .then(res => {
        this.userinfo = res.data.data;
        console.log(this.userinfo);
      })
      .catch(res => {
        console.log("失败" + res);
      });
    },
    methods: {
      back() {
        this.$router.push("/mine");
      },
      gopsw(){
        this.$router.push("/changepswd");
      },
    },
		computed: {
			showsex() {
				if (this.userinfo.sex == 0)
					return "女";
				else
					return "男";
			}
		}
  }
</script>

<style scoped="scoped">
  .changeinfo-bg {
    background: rgb(255, 255, 255);
    height: 20vh;
    background-size: 100%;
    border: 0px solid transparent;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  .text {
    font-size: 14px;
  }
  
  .item {
    /* padding: 18px 0; */
  }
  
  .changeinfo-card {
    margin: -5rem 1rem 1rem 1rem;
  }
  
  .changeinfo-title {
    font-size: 2rem;
    font-weight: lighter;
    margin-top: 1rem;
  }
  
  .wrapper {
    min-height: 94vh;
  }
  
  .el-main {
    max-height: 94vh;
  }
  
  #app {
    overflow: hidden;
  }
  
  .changeinfobtn {
    /* margin-top: 2rem; */
  }
  
  .changeinfo {
    margin-top: 5vh;
  }
  
  .changeinfo a, .changeinfo div {
    color: #409EFF;
  }
  
  .changeinfo p {
    margin: 0.5rem;
  }
</style>
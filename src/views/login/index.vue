<template>
<div>
    <form class="form" @click.submit.prevent>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" v-model='formData.name'  placeholder="请输入用户名">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" v-model='formData.phone'  placeholder="请输入电话">
            </div>
        </div>
        <div class="button-sp-area">
            <button type="submit" class="weui-btn weui-btn_plain-primary" @click="loginHandler">登录</button>
        </div>
    </form>
</div>
</template>
<script>
import validation from '../../assets/js/validation';
export default {
    data () {
        return {
           formData:{
               name:"",
               phone:"",
               error:''
           }, 
        }
    },
     computed: {
                user() {
                    return this.$store.state.user
                }
            },
    methods: {
        Validate:function(formData){  //封装表单验证的方法
        if (validation.isEmpty(formData.name)) {
            alert('请输入姓名')  
            return false //阻止 跳出去
            } else if (validation.isEmpty(formData.phone)) {
           alert('请输入您的手机号')
            return false
            } else if (!validation.checkPhone(formData.phone)) {
            alert('您的手机号格式有误')
            return false
            } else {
            return true
            }
        },
        loginHandler:function(){
  
            this.$http.get('http://localhost:8080/static/server/mock-data.json?username='+this.formData.name+'&phone='+this.formData.phone).then((response) => { 
                    //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
                    //注意这里是个难点，Vuex与Vue-Resource结合使用。 
                    if(response.body != null & response.body.length > 0){ 
                         var repString=JSON.stringify(response.body);
                         if(repString.indexOf(this.formData.name) !=-1 && repString.indexOf(this.formData.phone) !=-1){
                            this.$store.commit('loginHandler',response.body[0]);
                        this.name=''
                        this.phone= ''
                        this.$router.push({ path: 'home' }) 
                         }
                        
                    }else{
                       alert('请输入正确的用户名和电话！！！');
							this.name=''
							this.phone= ''
                    }
                    
                }).then((error)=> this.error = error)
        
                    
                

        }
           
    }
};
    
</script>
<style type="text/sass" lang="sass">
    
</style>
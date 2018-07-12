  <template>
    <div>
      <div class="loading-bar">
        <span class="press"></span>
      </div>

      <div class="app-init">
    
          <router-view></router-view>
    
      </div>
      <footer class="footer clear">
        <div class="footer-item">
          <p class="icon">
            <span class="iconfont icon-shouye"></span>
          </p>
          <p class="name">首页</p>
        </div>

        <div class="footer-item">
          <p class="icon">
            <span class="iconfont icon-fenlei"></span>
          </p>
          <p class="name">分类</p>
        </div>

        <div class="footer-item shop-car">
          <p class="icon">
            <span class="iconfont icon-gouwuche"></span>
          </p>
          <p class="name">购物车</p>
          <span class="num">1</span>
        </div>

        <div class="footer-item">
          <p class="icon">
            <span class="iconfont icon-smile"></span>
          </p>
          <p class="name">我的</p>
        </div>
      </footer>

    </div>


</template>

<script>
  import Rem from '@/assets/js/rem'

  new Rem();

  export default {
    name: 'app',
    data () {
      return {
       
      }
    },
    watch: {
     
    },
    computed: {
    
       
    },
    methods: {
     
    }
  }

</script>



<style lang="sass" type="text/sass">
  @import "./assets/sass/public"
  @import './assets/font/iconfont.css'




</style>
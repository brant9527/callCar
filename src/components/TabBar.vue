<template>
    <div class="tabBar">
      <div class="tabItem" v-tap="{methods:fnorder}">
        <a class="iconfont icon-activity tab-icon"></a>
        <div>行程</div>
      </div>
      <div class="tabItem" v-tap="{methods:fnpublish}">
        <a class="iconfont tab-icon icon-add"></a>
        <div>发布</div>
      </div>
      <div class="tabItem" v-tap="{methods:fnmine}">
        <a class="iconfont tab-icon icon-homepage"></a>
        <div>我的</div>
      </div>
      <div class="tabItem" v-tap="{methods:fnjoin}">
        <a class="iconfont tab-icon  icon-coordinates"></a>
        <div>加入社区</div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    fnorder () {
      this.$router.push({path: '/main'})
    },
    fnpublish () {
      this.$router.push({path: '/main/publish'})
    },
    fnmine () {
      this.$router.push({path: '/main/mine'})
    },
    fnjoin () {
      this.$router.push({path: '/main/join'})
    }
  }
}
</script>

<style lang='scss' scoped>
  .tabBar{
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 1.5rem;
    border-top:1px solid #B8B7B7;
    display: flex;
    .tabItem{
      width: 33.3%;
      text-align: center;
      .tab-icon{
        font-size: 0.8rem;
        // line-height: 1.5rem;
        margin:3px auto 0;
      }
    }
  }
</style>

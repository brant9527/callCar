<template>
    <div>
        <div class="head" @click="back">
            <i class="iconfont mintui mintui-back"></i>
            <div class="tietle">详情</div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.head{
    text-align: center;
    position: relative;
    .tietle{
        width: 100%;
        padding: 0.5rem 0;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid #dcdfe6;
    }
}
.mintui-back{
    position: absolute;
    top: 0.5rem;
    left: 0.5rem
}
</style>

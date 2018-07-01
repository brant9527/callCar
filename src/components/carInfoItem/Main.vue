<template>
    <div class="item">
      <div class="head"></div>
      <div class="info">
        <!-- <div class="money">{{money+ '元'}}</div> -->
        <div class="time">{{pickerVisible+ ' '+startAddress + ' - '+ endAddress}}</div>
        <a class="arrow iconfont icon-return"></a>
      </div>

    </div>
</template>

<script>
export default {
  props: {
    startAddress: '',
    endAddress: '',
    creatTime: '',
    pickerVisible: '',
    money: '',
    headurl: '',
    name: '',
    contact: '',
    roleValue: '',
    introduction: ''
  },
  data: () => ({
  })
}
</script>

<style lang='scss' scoped>
  .item{
    /*width: 100%;*/
    padding: 0.3rem 0.3rem;
    display: flex;
    border-radius: 5px;
    border: 1px solid #dcdfe6;
    margin: 0.3rem;
  }
  .head{
    height: 2rem;
    width: 2rem;
    overflow: hidden;
  }
  .info{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 0.2rem;
    .name{
      font-size: 0.3rem;
      color: #888888;
    }
    .money{
      font-size: 0.4rem;
    }
    .time{
      width: 100%;
      font-size: 0.5rem;
      text-overflow: ellipsis;
      overflow:hidden;
      white-space: nowrap;
    }
    .arrow{
      position: absolute;
      top: 0.8rem;
      right: 0;
      font-size: 0.7rem;
      transform: rotate(180deg);
    }
  }
</style>

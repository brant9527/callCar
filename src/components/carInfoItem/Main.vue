<template>
    <div class="item-out" >
      <div class="item">
          <div @click="detail" class="itemIn">
              <!-- <div class="head"></div> -->
              <div class="info">
                <div class="time"><span class="label">上班时间:</span>{{oItem.pickerVisible}}</div>
                <div class="time"> <span class="label">起点:</span>{{oItem.startAddress}}</div>
                <div class="time"> <span class="label">终点:</span>{{oItem.endAddress}}</div>

              </div>
              <a class="arrow iconfont icon-return"></a>
          </div>
          <div class="close" v-if="isClose" @click="deleteTrip"></div>
      </div>
    </div>
</template>

<script>
import {MessageBox} from 'mint-ui'
export default {
  props: {
    isClose: {
      type: Boolean,
      default: false
    },
    index: '',
    oItem: Object,
    type: Number
  },
  data: () => ({
  }),
  methods: {
    deleteTrip () {
      MessageBox.confirm('是否删除行程').then(res => {
        let parmas = {
          id: this.oItem._id
        }
        let that = this
        this.$axios.post('deleteTrip', parmas).then(res => {
          if (res.data.result) {
            that.$emit('deleteItem', that.index)
            MessageBox('删除成功')
          } else {
            MessageBox('删除数据出现错误')
          }
        })
      })
    },
    detail () {
      if (this.type === 1) {
        this.$router.push({path: '/main/carInfoAlert', query: {data: JSON.stringify(this.oItem)}})
      } else if (this.type === 2) {
        this.$router.push({path: '/main/publish', query: {data: JSON.stringify(this.oItem)}})
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.item-out{
  overflow: hidden;
}
  .item{
    position: relative;
    padding: 0.3rem 0.3rem;
    display: flex;
    border-radius: 5px;
    border: 1px solid #dcdfe6;
    margin: 0.3rem 0.4rem;
    .itemIn{
      display:flex;
      width: 100%;
      }
    .close{
      position: absolute;
      top: -10px;
      right: -10px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color:white;
      border: 1px solid #dcdfe6;

      &::before{
        position: absolute;
        content: ' ';
        width:100%;
        height: 1px;
        top:11px;
        border-bottom: 1px solid #dcdfe6;
        transform: rotate(-45deg)
      }
      &::after{
        position: absolute;
        content: ' ';
        width:100%;
        top:11px;
        height: 1px;
        border-bottom: 1px solid #dcdfe6;
        transform: rotate(45deg)
      }
    }
  }
  .head{
    height: 2rem;
    width: 2rem;
    overflow: hidden;
  }
  .info{
    // height: 2rem;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 0.2rem;
    .label{
      width: 2.5rem;
      text-align: left;
      display: inline-block;
    }
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

  }
   .arrow{
      position: absolute;
      top: 1rem;
      right: 0;
      font-size: 0.7rem;
      transform: rotate(180deg);
    }
</style>

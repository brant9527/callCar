<template>
    <div class="item">
        <!-- <label class="itemName" >{{itemName}}
        </label> -->
        <div class="inputOut">
          <input type="text" name="" :placeholder="itemName==='1'?'选择起点':'选择终点'" v-model="inputValue" @focus="focus" @focusout="focusout">
          <ul class="pulldom" v-if="isShow">
            <li v-for="item in list" :key="item.key" @click="select(item)">{{item}}</li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    oDetail: Object,
    itemName: String,
    value: String
  },
  created () {
  },
  methods: {
    focus () {
      this.isShow = 1
      this.getList()
    },
    focusout () {
      this.isShow = 0
    },
    select (item) {
      this.$emit('input', item)
    },
    getList () {
      let addressName = this.inputValue
      let query = {}
      if (this.itemName === '1') {
        query = {params: {startAddress: addressName}}
      } else {
        query = {params: {endAddress: addressName}}
      }
      this.$axios.get('/address/about', query).then(res => {
        this.list.splice(0, this.list.length)
        let listSet = new Set()
        res.data.list.map(i => {
          if (this.itemName === '1') {
            listSet.add(i.startAddress)
          } else {
            listSet.add(i.endAddress)
          }
        })
        console.log(listSet)
        this.list.push(...Array.from(listSet))
      })
    }
  },
  data: () => ({
    isShow: false,
    list: [ ],
    timer: {}
  }),
  computed: {
    inputValue: {
      get: function () {
        return this.value // 将props中的value赋值给currentValue
      },
      set: function (val) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.getList()
        }, 1000)
        this.$emit('input', val) // 通过$emit触发父组件
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  padding:  0rem 0.5rem;
  width: 80%;
  position: relative;
  .inputOut{
    font-size: 0.35rem;
    width: 100%;
    position: relative;
    margin: 0.1rem;
    input{
      font-size: inherit;
        width: 100%;
        line-height: 0.8rem;
        vertical-align: middle;
        text-indent:0.1rem;
        // border-bottom: 1px solid #dcdfe6;
        box-shadow:inset 0 0 20px #F2F2F2;
        &:focus{
          background-color: #F2F2F2;
        }
          }
      .pulldom{
        position: absolute;
        z-index: 10;
        width: 100%;
        max-height: 6rem;
        background-color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        overflow: auto;
        // border-bottom: 1px solid #dcdfe6;
        // border-left: 1px solid #dcdfe6;
        // border-right: 1px solid #dcdfe6;
        border: 1px solid #dcdfe6;
        li{
          font-size: inherit;
          border-bottom: 1px solid #dcdfe6;
          line-height: 0.8rem;
          padding:0.2rem 0.5rem ;
          &:last-child{
           border-bottom: none
          }
        }
      }
  }

}
</style>

<template>
    <div class="">
      <div class="topTab">
        <!-- <am-select class="select-out" v-model="selectStart"  :isBorder="false" :propsList="propsList"></am-select>
        <am-select class="select-out" v-model="selectEnd"  :isBorder="false" :propsList="propsList"></am-select> -->
      <Search :itemName='selectStartLabel' v-model="selectStart"></Search>
      <Search :itemName='selectEndLabel' v-model="selectEnd"></Search>
      <div class="btnSearch" @click="getInfoByCondition(true)">搜索</div>
      <mt-switch class="switch" v-model="radioValue">{{radioValue?'有车':'无车'}}</mt-switch>
      </div>
      <!-- <am-iscroll :iscrollClass="iscrollClass">
        <cardInfoItem v-for="(item,index) in cardList" :index="index" :key="item.id" :id="item.accountId"  :oItem="item" @click="detail(item)"></cardInfoItem>
      </am-iscroll> -->
      <div class="mint-iscroll">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
          <li v-for="(item,index) in cardList" :key="item.id">
            <cardInfoItem  :index="index" :key="item.id" :id="item.accountId"  :oItem="item" :type="1" ></cardInfoItem>
          </li>
      </ul>
       <p class="page-infinite-loading" style="display: none;"><span><div class="mint-spinner-fading-circle circle-color-5" style="width: 28px; height: 28px;"><div class="mint-spinner-fading-circle-circle is-circle2"></div><div class="mint-spinner-fading-circle-circle is-circle3"></div><div class="mint-spinner-fading-circle-circle is-circle4"></div><div class="mint-spinner-fading-circle-circle is-circle5"></div><div class="mint-spinner-fading-circle-circle is-circle6"></div><div class="mint-spinner-fading-circle-circle is-circle7"></div><div class="mint-spinner-fading-circle-circle is-circle8"></div><div class="mint-spinner-fading-circle-circle is-circle9"></div><div class="mint-spinner-fading-circle-circle is-circle10"></div><div class="mint-spinner-fading-circle-circle is-circle11"></div><div class="mint-spinner-fading-circle-circle is-circle12"></div><div class="mint-spinner-fading-circle-circle is-circle13"></div></div></span>
          加载中...
        </p>
      </div>
    </div>
</template>

<script>
import AmSelect from '../../components/select/AmSelect.vue'
import Search from '../../components/search/Main'
import cardInfoItem from '../../components/carInfoItem/Main.vue'
import { Indicator } from 'mint-ui'
export default {
  components: {
    AmSelect,
    cardInfoItem,
    Search},
  data: () => ({
    selectStart: '',
    selectEnd: '',
    selectStartLabel: '1',
    selectEndLabel: '2',
    propsList: [{
      value: 0,
      label: '湖里'
    }, {
      value: 1,
      label: '金山'
    }],
    cardList: [],
    iscrollClass: {
      top: 2,
      bottom: 0
    },
    now: 0,
    currentIndex: 0,
    request: true,
    radioValue: true
  }),
  methods: {
    getinfo (f) {
      if (this.request || f) {
        Indicator.open({
          text: 'Loading...',
          spinnerType: 'fading-circle'
        })
        let params = {
          now: this.now,
          currentIndex: this.currentIndex++,
          startAddress: this.selectStart,
          endAddress: this.selectEnd
        }
        if (this.radioValue) {
          params.roleValue = 1
        } else {
          params.roleValue = 2
        }
        this.$axios.get('/car/gettrip', {params: params}).then(res => {
          Indicator.close()
          if (res.data && res.data.result && res.data.data) {
            if (f) {
              this.cardList.splice(0, this.cardList.length)
            }
            this.cardList.push(...res.data.data)
          } else if (res.data.result === false) {
            this.request = false
          }
        })
      }
    },
    getInfoByCondition (f) {
      this.currentIndex = 0
      this.getinfo(f)
    },
    loadMore () {
      this.getinfo()
    }
  },
  created () {
    this.now = new Date().getTime()
  },
  watch: {
    'selectStart': function (value) {
      console.log(value)
    }
  }
}
</script>

<style lang='scss' scoped>
  .select-out{
    display: inline-block;
    vertical-align: top;
    margin: 0.2rem;
  }
  .topTab{
    position: absolute;
    height: 2rem;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    // border: 1px solid #dcdfe6;
    z-index: 10;
  }
  .mint-iscroll{
    position: absolute;
    top: 2rem;
    bottom: 0;
    overflow: scroll;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
  .btnSearch{
    border: 1px solid #666666;
    position: absolute;
    width: 1.8rem;
    text-align: center;
    line-height: 0.7rem;
    font-size: 0.35rem;
    top: 0.6rem;
    right: 0.2rem;
    border-radius: 5px;
  }
  .switch{
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
  }
</style>

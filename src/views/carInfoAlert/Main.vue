<template>
    <div>
        <backHead :tietle='oTietle'></backHead>
        <tripDetail :oDetail='oDetail'></tripDetail>
    </div>
</template>
<script>
import backHead from '../../components/backHead/Main'
import tripDetail from '../../components/tripDetail/Main'
export default {
  components: {backHead, tripDetail},
  // props: {
  //   oDetail: Object,
  //   tietle: Object
  // },
  data: () => ({
    oTietle: {
      tietle: '详情'
    },
    oDetail: {
      abc: ''
    }
  }),
  created () {
    this.oDetail = JSON.parse(this.$route.query.data)
  }
}
</script>

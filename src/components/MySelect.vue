<template>
    <div class="">
      <div class="am-select">
        <!--<div class="item">{{selectValue}}</div>-->
        <select @change="change" class="am-select">
          <option>
            1
          </option>
          <option>
            2
          </option>
          <option>
            3
          </option>
        </select>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    msg: '',
    value: '',
    selectValue: ''
  }),
  methods: {
    change (event) {
      this.selectValue = event.target.value
    }
  }
}
</script>

<style lang='scss'>
</style>

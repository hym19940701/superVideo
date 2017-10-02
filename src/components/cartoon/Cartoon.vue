<template>
  <div class="main">
    <freshenBlock></freshenBlock>
    <ul>
      <li class="img-box" v-for="item in cartoonData">
        <span class="category-name">{{item.category_name}}</span>
        <img :src='item.pich' height="200px" width="100%">
        <div class="item-bottom">
          <div class="item-name">
            {{item.name}}
          </div>
          <div class="item-description">
            {{item.description}}
          </div>
          <div class="item-info">
            {{item.info}}
          </div>
          <span class="item-shadow"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import freshenBlock from '../freshenblock/freshenBlock'
  export default {
    data () {
      return {
        cartoonData: {}
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/cartoonData')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.cartoonData = response.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    components: {
      freshenBlock
    }
  }
</script>

<style lang="less" scoped>
  @import '../../common/less/mixin';
</style>

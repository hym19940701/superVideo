<template>
  <div class="main">
    <freshenBlock></freshenBlock>
    <ul>
      <li class="img-box" v-for="item in teleplayData">
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
        teleplayData: {}
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/teleplayData')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.teleplayData = response.data
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
  ul{
    margin: 0;
    padding:0;
  }
  .top-placeholder{
    width:100%;
    height:70px;
  }
.img-box{
  position: relative;
  img{
    width:100%;
    height:220px;
  }
  .category-name{
    display: block;
    position: absolute;
    width:40px;
    height:14px;
    color: white;
    background-color: #1C130E;
    font-size: 10px;
    text-align: center;
    left:0;
    top:0;
  }
  .item-bottom{
    width:100%;
    height:80px;
    .item-name{
      margin:10px 7px;
    }
    .item-description{
      margin-left: 7px;
      font-size: 12px;
      color: #868686;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-info{
      margin:10px 7px;
      font-size: 10px;
      color: #B9B9B9;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-shadow{
      display: block;
      width:100%;
      height:9px;
      background-color: #F3F3F3;
    }
  }
}
</style>

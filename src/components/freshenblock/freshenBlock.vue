<template>
  <div class="main">
    <div class="top-placeholder" ref="placeholder"></div>
    <div class="freshenBlock">
      <span class="pull-down-img"><img src="../../img/freshen/default_ptr_flip_sd.png"></span>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        scroll: ''
      }
    },
    methods: {
      scrollTop () {
        this.scroll = document.body.scrollTop
        console.log(this.scroll)
      }
    },
    created() {
      this.$nextTick(function() {
        window.addEventListener('scroll', this.scrollTop)
      })
    }
  }
</script>

<style lang="less" scoped>
  .top-placeholder{
    width:100%;
    height:0;
  }
  .freshenBlock {
    position: relative;
    width: 100%;
    height: 67px;
    background-color: #ededed;
   .pull-down-img{
     position: absolute;
     display: block;
     width:15px;
     height:15px;
     left:50%;
     top:70%;
     margin-left:-7.5px;


     img{
       width:100%;
       height:100%;
     }
   }
  }
</style>

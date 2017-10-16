<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="search-bar">
        <img class="search-icon" src="../../img/new_search_icon.png" width="16px" height="16px">
        <router-link to="search">
          <input type="text" placeholder="请输入影片名">
        </router-link>
        <img src="../../img/history_icon_b_normal.png" width="16px" height="16px">
        <img src="../../img/download_icon_b_normal.png" width="16px" height="16px">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'
  export default {
    props: {
      teleplayData: {
        type: Object
      },
      test: {
        type: Number
      }
    },
    data() {
      return {
//        classMap: this.$store.state.classMap
      }
    },
    methods: {
      ...mapActions(['transitionEnd', 'transitionAgain', 'startHeaderTransition']),
      ...mapMutations(['RECEIVE_LENGTH']),
      test1() {
        console.log(this.test)
      }
    },
    created() {
    }
//    watch: {
//      seller(val) {
//        if (val.supports) {
//          this.RECEIVE_LENGTH(val.supports.length)
//          this.$nextTick(function () {
//            this.startHeaderTransition(this.$refs.suppots)
//            this.transitionEnd({
//              obj: this.$refs.suppots,
//              callback: () => {
//                this.transitionAgain({obj: this.$refs.suppots, modules: 'header'})
//              }
//            })
//          })
//        }
//      }
//    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin";

  @black: rgba(7, 17, 27, 0.5);
  @line-height: 12px;
  @font-weight: 200;

  .header {
    position: relative;
    height: 27px;
    color: #fff;
    z-index: 60;
  }

  .content-wrapper {
    width: 100%;
  }

  .search-bar {
    input:-ms-input-placeholder {
      text-align: center;
      font-size: 14px;
    }
    input::-webkit-input-placeholder {
      text-align: center;
      font-size: 14px;
    }
    input {
      width: 81%;
      height: 100%;
      margin-left: 1.6%;
      border-radius: 6.5px;
      background-color: #F0F0F0;
      border: none;
    }
    .search-icon {
      position: absolute;
      margin-left: 23%;
      margin-top: 1%;
    }
  }
</style>

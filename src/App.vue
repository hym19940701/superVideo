<template>
  <div id="app">
    <div class="table border">
      <div id="table-item">
        <div class="table-item">
          <router-link to="/recommend" >推荐</router-link>
        </div>
        <div class="table-item">
          <router-link to="/movie">电影</router-link>
        </div>
        <div class="table-item">
          <router-link to="/teleplay">电视剧</router-link>
        </div>
        <div class="table-item">
          <router-link to="/cartoon">动漫</router-link>
        </div>
        <div class="table-item">
          <router-link to="/variety">综艺</router-link>
        </div>
        <div class="table-item">
          <router-link to="/newsreel">纪录片</router-link>
        </div>
      </div>
      <v-header></v-header>
    </div>
    <transition :name="transitionName">
      <router-view  class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  export default {
    name: 'app',
    data () {
      return {
        test: 1,
        transitionName: 'transitionName'
      }
    },
    methods: {
    },
    components: {
      'v-header': Header
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style lang="less">
  a {
    text-decoration: none;
  }

  #app {

    .table {
      width: 100%;
      position: fixed;
      z-index: 50;
      background-color: white;
    }

    .child-view:not(.item-bottom) {
      position: absolute;
      left:0;
      top: 0;
      height: 100%;
      width: 100%;
      transition: all .5s cubic-bezier(.55,0,.1,1);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
    /* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;

    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;

    }
    .slide-enter-active {

    }
    .slide-leave-active {

    }

    #table-item {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .table-item {
      flex-grow: 1;
      /*flex-shrink: 1;*/
      text-align: center;
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
   ul{
     list-style: none;
   }
  }

  /*.active {*/
  /*color: red;*/
  /*}*/

</style>

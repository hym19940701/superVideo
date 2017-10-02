<template>
  <div class="main" >
    <freshenBlock></freshenBlock>
    <div ref="imgWrapper">
      <ul>
        <router-link to="/recommend/video">
          <li class="img-box" v-for="(item,index) in recommendData" :index="index" @click="recordID([index,'recommend'])">
            <span class="category-name">{{item.category_name}}</span>
            <img :src='item.pich' height="312px" width="100%">
            <div class="item-bottom">
              <div class="item-name" >
                {{item.name}}{{item.aid}}

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
        </router-link>

      </ul>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import freshenBlock from '../freshenblock/freshenBlock'
  import {mapMutations, mapActions} from 'vuex'
  import IScroll from 'iscroll'
//  import Video from '../video/Video'
  export default {
    data () {
      return {
        recommendData: {},
        videoID: [],
        index: undefined,
        scroll: ''
      }
    },
    watch: {
      index(val) {
        console.log(val)
      }
    },
    methods: {
      _initScroll() {
        // <!-- 将这段代码放在 head 标签内 解决iscroll在chrome浏览器卡顿问题
        //  解决方法 https://segmentfault.com/q/1010000008489619
        //  http://www.qianduan.org/post-468.html 解释
        this.imgScroll = new IScroll(this.$refs.imgWrapper, {
          click: true,
          probeType: 3  // 这调节了探针监听滚动事件触发的频率
        })
      },
      scrollTop() {
        this.scroll = document.body.scrollTop
        console.log(this.scrollTop)
      },
      ...mapMutations(['RECORD_ID']),
      ...mapActions(['recordID'])
    },
    created () {
      let self = this
      this.$axios.get('/api/recommendData')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.recommendData = response.data
            for (let i = 0; i < self.recommendData.length; i++) {
              self.videoID.push(self.recommendData[i].aid)
            }
            self.$store.state.videoID = self.videoID
            self.$nextTick(() => {
//              self._initScroll()
//              window.addEventListener('scroll', self.scrollTop())
            })
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    mounted() {
      window.addEventListener('scroll', this.scrollTop)
    },
    components: {
      freshenBlock
//      Video
    }
  }
</script>

<style lang="less" scoped>
  @import '../../common/less/mixin';
</style>

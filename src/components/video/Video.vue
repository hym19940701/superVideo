<template>
  <div class="main">
    <div class="video-area">
      <span class="back-button" onclick="window.history.go(-1)"><img src="../../img/buck-button.png" alt=""></span>
      <img src="../../img/video-backgroud.jpg" alt="">
    </div>
    <div class="content-introduce">
      <div class="top-bar">
        <span class="big-icon fl"><img src="../../img/origin_icon.png" alt=""></span>
        <span class="small-icon fr"><img src="../../img/download_icon_b_normal.png" alt=""></span>
        <span class="small-icon fr"><img src="../../img/share_icon.png" alt=""></span>
        <span class="small-icon fr"><img src="../../img/collection_icon_normal.png" alt=""></span>
      </div>
      <div class="video-message">
        <div class="video-name">{{classData.name}} <span class="detail-button fr"><img :src=imgsrc ref="clickChange"
                                                                                       @click="clickChange"></span>
        </div>
        <div class="video-brief">
          {{year}} {{classData.rating}} {{classData.category_name}}

        </div>
        <div class="video-description" :class="{active: active}">简介:{{classData.description}}</div>
        <span><img src="" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        recordID: this.$store.state.recordID,
        recordClass: this.$store.state.recordClass,
        videoID: [],
        classData: {},
        year: String,
        imgsrc: require('../../img/video_detail_more.png'),
        active: false
      }
    },
    methods: {
      ...mapActions(['test']),
      clickChange() {
//        let imgsrc = this.$refs.clickChange.src
        console.log(require('../../img/video_detail_more1.png'))
        if (this.imgsrc === require('../../img/video_detail_more.png')) {
          this.imgsrc = require('../../img/video_detail_more1.png')
          this.active = true
          console.log(this.$refs.description)
        } else {
          this.imgsrc = require('../../img/video_detail_more.png')
          this.active = false
        }
        console.log(this.imgsrc)
      }
    },
    created () {
      let self = this
//      this.imgsrc = this.$refs.clickChange.src
//      console.log(this.imgsrc)
      const url = this.recordClass + 'Data'
//      console.log(url)
      this.$axios.get('api/' + url)
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.classData = response.data
            for (let i = 0; i < self.classData.length; i++) {
              if (self.recordID === self.classData[i].aid) {
                self.classData = self.classData[i]
                self.year = self.classData.info.substring(0, 5)
                console.log(typeof self.classData)
              }
            }
            self.$nextTick(() => {
//              self._initScroll()
            })
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="less" scoped>
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .main {
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 60;
  }

  .video-area {
    position: relative;
    width: 100%;
    background-color: black;
    height: 250px;
    background-color: rgba(0, 0, 0, .9);
    img {
      width: 100%;
      height: 100%;
      opacity: .1;
    }
    .back-button {
      position: absolute;
      width: 15px;
      height: 15px;
      top: 15px;
      left: 15px;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        opacity: 1;
      }
    }
  }

  .content-introduce {
    .top-bar {
      width: 100%;
      height: 50px;
      .big-icon {
        width: 50px;
        height: 25px;
        img {
          width: 100%;
          height: 100%;
        }
        margin: 10px 15px;
      }
      .small-icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin: 15px 15px 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .video-message {
      .video-name {
        .detail-button {
          width: 15px;
          height: 8px;
          margin: -3px 10px 0 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        font-size: 15px;
        color: black;
      }
      .video-brief {
        font-size: 12px;
        color: #A3A3A3;
      }
      .video-description {
        font-size: 12px;
        color: #989898;
      }
      .active{
        font-size: 15px;
        max-height: 16px;
        overflow: hidden;
        word-break:keep-all;
        white-space:nowrap;
        text-overflow:ellipsis;
      }
    }
  }


</style>

<template>
  <div class="main">
    <div class="content-wrapper">
      <div class="search-bar">
        <div class="search-bar-bc">
          <img class="search-icon" src="../../img/home_search_icon.png" width="13px" height="13px">
          <input type="text" placeholder="请输入影片名">
        </div>
        <span class="cancel" onclick="window.history.go(-1)">
          取消
        </span>
      </div>
      <div class="search-history">
        <div class="search-history-item">
          <div>
            <div class="l-img fl"><img src="../../img/search_history_left_icon.png" width="15px" height="15px"></div>
            <div class="title fl">搜索历史</div>
            <div class="r-img fr"><img src="../../img/trash-r.png" width="15px" height="15px"></div>
          </div>
        </div>
      </div>
      <div class="hot-search">
        <div class="hot-search-title">
          <img src="../../img/hot_search_icon.png" width="15px" height="19px">
          <span>热门搜索</span>
        </div>
        <div class="left-item">
          <ul>
            <!--in前面要加空格，要不然渲染不了-->
            <li v-for="(item,index) in searchData" class="fl" :index="index">
              <template v-if="index%2==0">
                <span class="hot-search-icon">
                {{index + 1}}
                </span>
                {{item.name}}
              </template>
            </li>
          </ul>
        </div>

        <div class="right-item">
          <ul>
            <!--in前面要加空格，要不然渲染不了-->
            <li v-for="(item,index) in searchData" class="fl" :index="index">
              <template v-if="index%2!=0">
                <span class="hot-search-icon" >
                {{index + 1}}
                </span>
                {{item.name}}
              </template>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchData: {},
        index: undefined
      }
    },
    methods: {
      onclick(index) {
        alert(index)
      }
    },
    created() {
      let self = this
      this.$axios.get('/api/searchData')
        .then((response) => {
          response = response.data
          console.log(123)
          if (response.error === 0) {
            self.searchData = response.data
          }
        })
        .catch(error => {
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
    z-index: 51;
    background-color: white;
  }

  .content-wrapper {
    width: 100%;
  }

  .search-bar {
    input:-ms-input-placeholder {
      color: #D6D6D6;
      font-size: 12px;
      line-height: 100%;
      outline: none;
    }
    input::-webkit-input-placeholder {
      color: #D6D6D6;
      font-size: 12px;
      line-height: 100%;
      outline: none;
    }
    input {
      padding: 0;
      width: 81%;
      height: 100%;
      margin-left: 0;
      background-color: #F0F0F0;
      border: none;
    }
    .search-icon {
      margin-left: 3%;
      margin-top: 1%;
    }
    .search-bar-bc {
      display: inline-block;
      background-color: #F0F0F0;
      height: 30px;
      width: 85%;
      margin-top: 1.5%;
      margin-left: 1.6%;
      margin-right: 0;
    }
    .cancel {
      font-size: 17px;
    }
  }

  .search-history {
    margin: 7px;
    .search-history-item {
      width: 100%;
      height: 100px;
      border-top: 10px solid #F0F0F0;
      border-bottom: 10px solid #F0F0F0;
     .l-img{
       margin: 10px 10px 0px 10px;
     }
      .title{
        margin-top:7px;
      }
      .r-img{
        margin:10px 10px 0px 10px;
      }
    }
  }

  .hot-search {
    .hot-search-title{
      img{
        margin:5px 10px 0px 17px;
      }
      /*span{*/
        /*margin-top:3px;*/
      /*}*/
    }
    .hot-search-icon {
      display: inline-block;
      width: 23px;
      height: 18px;
      background-color: #CCCCCC;
      text-align: center;
      line-height: 18px;
      color: white;
    }
    .hot-search-icon:nth-of-type(1) {

    }
    .left-item, .right-item {
      float: left;
      display: inline-block;
      width: 180px;
      height: 172px;
      overflow: hidden;
    }
    .left-item{
      margin-left: -23px;
    }
  }

</style>

<!-- 文章列表页面 -->
<template>
  <div class="articlelist">
    <header>
      <div class="container d-flex clearfix">
        <div
          class="header-content-box company-header-content-box"
          style="
            background-image: url('https://csdnimg.cn/release/blogv2/dist/pc/img/head.png');
            padding: 0 16px;
          "
        >
          <div class="title-box">
            <h1 class="title-blog company-title-blog">
              <a href="https://blogdev.blog.csdn.net" style="">CSDN 官方博客</a>
            </h1>
            <p class="description" style=""></p>
          </div>
          <div class="opt-box d-flex justify-content-end"></div>
        </div>
      </div>
      <ul class="corporate-blog-navigation">
        <li>
          <a href="https://blogdev.blog.csdn.net" target="_blank" rel="noopener">博客首页</a>
        </li>
      </ul>
    </header>
    <div class="container clearfix pt0" id="mainBox">
      <main class="content-mian-box">
        <div class="container-header">
          <ul class="container-header-ul" id="container-header-ul">
            <li
              v-for="(cate, index) in cateList"
              :key="cate.cate_id"
              :class="cate.active ? 'active' : ''"
              class="margin"
              id="container-header-blog"
              @click="handleCateToggle(cate, index)"
            >
              <span data-report-click='{"spm":"1001.2014.3001.5189"}'>{{
                cate.cate_name
              }}</span>
            </li>
          </ul>
        </div>

        <div class="articleMeList-integration" style="display: block">
          <div class="article-list-integration">
            <div
              v-for="item in articleList"
              :key="item.article_id"
              class="article-list-integration-item"
            >
              <a
                ><h4>{{ item.article_title }}</h4></a
              >
              <div class="desc">
                {{ item.article_desc }}
              </div>
              <div class="tag">{{ item.article_key }}</div>
              <div class="bottom">
                <p class="time">{{ item.create_time }}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside class="blog_container_aside">
        <div id="asideSearchArticle" class="aside-box">
          <div class="aside-content search-comter">
            <div class="aside-search aside-search-blog">
              <input
                type="text"
                class="input-serch-blog"
                name=""
                autocomplete="off"
                value=""
                id="search-blog-words"
                placeholder="搜博主文章"
              />
              <a class="btn-search-blog">
                <img src="//csdnimg.cn/cdn/content-toolbar/csdn-sou.png?v=1587021042" />
              </a>
            </div>
          </div>
        </div>

        <div id="asideHotArticle" class="aside-box">
          <h3 class="aside-title">热门文章</h3>
          <div class="aside-content">
            <ul class="hotArticle-list">
              <li>
                <a
                  href="https://blogdev.blog.csdn.net/article/details/103478461"
                  target="_blank"
                  data-report-click='{"mod":"popu_541","spm":"1001.2101.3001.4139","dest":"https://blogdev.blog.csdn.net/article/details/103478461","ab":"new"}'
                >
                  博客帮助文档
                  <img
                    src="https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png"
                    alt=""
                  />
                  <span class="read">1034305</span>
                </a>
              </li>
              <li>
                <a
                  href="https://blogdev.blog.csdn.net/article/details/90369522"
                  target="_blank"
                  data-report-click='{"mod":"popu_541","spm":"1001.2101.3001.4139","dest":"https://blogdev.blog.csdn.net/article/details/90369522","ab":"new"}'
                >
                  版权申诉指引
                  <img
                    src="https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png"
                    alt=""
                  />
                  <span class="read">864690</span>
                </a>
              </li>
              <li>
                <a
                  href="https://blogdev.blog.csdn.net/article/details/655919"
                  target="_blank"
                  data-report-click='{"mod":"popu_541","spm":"1001.2101.3001.4139","dest":"https://blogdev.blog.csdn.net/article/details/655919","ab":"new"}'
                >
                  CSDN Blog推出Blog开发小组博客，欢迎大家通过它反馈意见
                  <img
                    src="https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png"
                    alt=""
                  />
                  <span class="read">783399</span>
                </a>
              </li>
              <li>
                <a
                  href="https://blogdev.blog.csdn.net/article/details/8770910"
                  target="_blank"
                  data-report-click='{"mod":"popu_541","spm":"1001.2101.3001.4139","dest":"https://blogdev.blog.csdn.net/article/details/8770910","ab":"new"}'
                >
                  Java应用级产品开发平台APDPlat作者杨尚川专访
                  <img
                    src="https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png"
                    alt=""
                  />
                  <span class="read">574546</span>
                </a>
              </li>
              <li>
                <a
                  href="https://blogdev.blog.csdn.net/article/details/50265905"
                  target="_blank"
                  data-report-click='{"mod":"popu_541","spm":"1001.2101.3001.4139","dest":"https://blogdev.blog.csdn.net/article/details/50265905","ab":"new"}'
                >
                  年末盛典-点亮你心中的CSDN 2015博客之星
                  <img
                    src="https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png"
                    alt=""
                  />
                  <span class="read">454584</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="asideCategory" class="aside-box flexible-box">
          <h3 class="aside-title">分类专栏</h3>
          <div class="aside-content">
            <ul>
              <li class="">
                <a
                  class="clearfix"
                  target="_blank"
                  href="https://blog.csdn.net/blogdevteam/category_9854598.html"
                  data-report-click='{"mod":"popu_537","spm":"1001.2101.3001.4137","strategy":"pc付费专栏左侧入口","dest":"https://blog.csdn.net/blogdevteam/category_9854598.html","ab":"new"}'
                >
                  <img
                    src="https://img-blog.csdnimg.cn/20201014180756738.png?x-oss-process=image/resize,m_fixed,h_64,w_64"
                    alt=""
                    onerror="this.src='https://img-blog.csdnimg.cn/20201014180756922.png?x-oss-process=image/resize,m_fixed,h_64,w_64'"
                  />
                  <span class="title oneline">
                    <span class="text">产品公告</span>
                  </span>
                  <span class="count float-right">18篇</span>
                </a>
              </li>
              <li class="">
                <a
                  class="clearfix"
                  target="_blank"
                  href="https://blog.csdn.net/blogdevteam/category_9581726.html"
                  data-report-click='{"mod":"popu_537","spm":"1001.2101.3001.4137","strategy":"pc付费专栏左侧入口","dest":"https://blog.csdn.net/blogdevteam/category_9581726.html","ab":"new"}'
                >
                  <img
                    src="https://img-blog.csdnimg.cn/20191210153545394.jpg?x-oss-process=image/resize,m_fixed,h_64,w_64"
                    alt=""
                    onerror="this.src='https://img-blog.csdnimg.cn/20201014180756922.png?x-oss-process=image/resize,m_fixed,h_64,w_64'"
                  />
                  <span class="title oneline">
                    <span class="text">帮助文档</span>
                  </span>
                  <span class="count float-right">30篇</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="asideArchive"
          class="aside-box"
          style="display: block !important; width: 300px"
        >
          <h3 class="aside-title">最新文章</h3>
          <div class="aside-content">
            <ul class="inf_list clearfix">
              <li class="clearfix">
                <a
                  href="https://blogdev.blog.csdn.net/article/details/114983298"
                  target="_blank"
                  data-report-click='{"mod":"popu_382","spm":"1001.2101.3001.4136","dest":"https://blogdev.blog.csdn.net/article/details/114983298","ab":"new"}'
                  data-report-view='{"mod":"popu_382","dest":"https://blogdev.blog.csdn.net/article/details/114983298","ab":"new"}'
                  >官方@你了！“橱窗小店”产品正式上线，快来体验！</a
                >
              </li>
              <li class="clearfix">
                <a
                  href="https://blogdev.blog.csdn.net/article/details/114134512"
                  target="_blank"
                  data-report-click='{"mod":"popu_382","spm":"1001.2101.3001.4136","dest":"https://blogdev.blog.csdn.net/article/details/114134512","ab":"new"}'
                  data-report-view='{"mod":"popu_382","dest":"https://blogdev.blog.csdn.net/article/details/114134512","ab":"new"}'
                  >元宵到·桃花开，情人节征文活动榜单已公布！</a
                >
              </li>
              <li class="clearfix">
                <a
                  href="https://blogdev.blog.csdn.net/article/details/113698614"
                  target="_blank"
                  data-report-click='{"mod":"popu_382","spm":"1001.2101.3001.4136","dest":"https://blogdev.blog.csdn.net/article/details/113698614","ab":"new"}'
                  data-report-view='{"mod":"popu_382","dest":"https://blogdev.blog.csdn.net/article/details/113698614","ab":"new"}'
                  >CSDN拯救“直男”计划——CSDN为爱助力，桃花朵朵开！</a
                >
              </li>
            </ul>
            <div class="archive-bar"></div>
            <div class="archive-box">
              <div class="archive-list-item">
                <a
                  href="https://blogdev.blog.csdn.net/article/month/2021/03"
                  target="_blank"
                  data-report-click='{"mod":"popu_538","spm":"1001.2101.3001.4138","ab":"new","dest":""}'
                  ><span class="year">2021年</span><span class="num">9篇</span></a
                >
              </div>
              <div class="archive-list-item">
                <a
                  href="https://blogdev.blog.csdn.net/article/month/2020/12"
                  target="_blank"
                  data-report-click='{"mod":"popu_538","spm":"1001.2101.3001.4138","ab":"new","dest":""}'
                  ><span class="year">2020年</span><span class="num">102篇</span></a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- 详情页显示目录 -->
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
interface list {
  articleList: any[]
  cateList: any[]
}
import { getArticleCate, getArticleList } from '@/api/article'
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
export default {
  // data() {
  //   return {}
  // },

  setup(props: object) {
    // const { ctx } = getCurrentInstance()
    const state: list = reactive({
      articleList: [],
      cateList: [],
    })
    // 获取文章列表
    const getArticleListFn = (param: any): void => {
      getArticleList(param).then((res: any) => {
        state.articleList = res.data
      })
    }
    // 获取分类
    const getArticleCateFn = (): void => {
      getArticleCate({}).then((res: any) => {
        state.cateList = res.data
      })
    }
    // tab切换
    const handleCateToggle = (item: any, index: number): void => {
      state.cateList.forEach((item, num) => {
        item.active = index == num
      })
      getArticleListFn({ cate_id: item.cate_id })
    }
    onMounted(() => {
      getArticleCateFn()
      getArticleListFn({})
    })
    return {
      ...toRefs(state),
      handleCateToggle,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

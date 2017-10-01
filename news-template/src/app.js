var app = new Vue({
  el: '#app',
  created: function() {
    document.title = '沃草→草報←' + this.cover.issue + '↑' + this.nav.title;
    document.getElementsByTagName('meta').namedItem('description').content = document.title;
  },
  methods: {
    getLogoURL: function(id) {
      return 'https://watchout.tw/asset/logo/' + id + '/small.png';
    },
    getAssetURL: function(filename) {
      return this.permalink + '/asset/' + filename;
    },
  },
  data: {
    permalink: 'https://watchout.tw/news/9-ask',
    cover: {
      image: 'cover.png',
      issue: '第九期',
      date: '2017年9月28日',
    },
    nav: {
      title: '立委給問公民推噓',
      toc: [
        {
          channel: 'ask',
          title: '桃園立委給問登場',
        },
        {
          channel: 'edu',
          title: '全台最大哲普年會',
        },
        {
          channel: 'musou',
          title: '工傷。勞權 桃園立委回答嗎',
        },
        {
          channel: 'vendor',
          title: '現代草民哲學讀本',
        },
      ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'ask',
        name: '給問擂台',
        title: '桃園立委給問登場', // 區塊標題
        description: '「六都立委給問嗎」第二站：桃園 9/23登場，超過百人質詢立委。針對各種在地議題，陳學聖、鄭運鵬兩位立委，現場承諾與表態，公民直接以推噓扇回應立委。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://youtu.be/PAC8Cz3Kkxk', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '桃園立委給問直播', // 連結標題
            text: [ // 連結附加文字，分行
              '當日活動完整影音'
            ],
          },
          {
            link: 'https://ask.watchout.tw/', // 連結網址
            thumbnail: 'ask-2.jpg', // 連結縮圖
            title: '了解更多立委給問', // 連結標題
            text: [ // 連結附加文字，分行
              '台中高雄雙北，立委給問Coming soon'
            ],
          },
        ]
      },
      {
        id: 'edu',
        name: '公民學院',
        title: '百人華山論哲學',
        description: '沃草公民學院日前在華山舉辦全台最大的哲學普及年會，台港共九個哲普團體與會主講，在場與會聽眾超過百人。',
        articles: [
          {
            link: 'https://goo.gl/rhTei2', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '百人華山論哲學 沃草年會大成功',
            text: [
              '編輯：廖昱涵',
            ],
          }
        ],
        images: [ // 大圖
       {
         title: '康德散步',
         description: '',
         url: 'walk-1.png',
         orientation: 'portrait',
         link: '',
       },
     ],
      },
      {
        id: 'musou',
        name: '國會無雙',
        title: '桃園立委會答嗎？', // 區塊標題
        description: '桃園立委給問活動順利結束，但對答如流的立委碰上公民團體詢問勞動議題就安靜了下來。台灣勞工權益還有哪些問題，沃草帶您一同回顧。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/focuses/1308', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: '工程會：聘違法勞工是包商責任 林淑芬痛批罔顧工安事故', // 連結標題
            text: [ // 連結附加文字，分行
              '記者：蕭長展',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1331', // 連結網址
            thumbnail: 'musou-2.jpg',
            title: '教育部漠視學生權益？林淑芬揭馬政府曾發文勞動部「別管建教生」',
            text: [
              '編輯：蕭長展',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1197', // 連結網址
            thumbnail: 'musou-3.jpg',
            title: '林淑芬：勞保給付對石綿職災「間皮細胞瘤」不公 勞動部承諾修改放寬',
            text: [
              '編輯：蕭長展',
            ],
          },
        ]
      },
      {
        id: 'maa',
        name: '草漫',
        images: [
          {
            link: '',
            url: 'maa-1.png',
            orientation: 'landscape',
          },
        ],
      },
      {
        id: 'vendor',
        name: '草地攤販',
        description: '沃草出品的第一本哲學書《現代草民哲學讀本：跟沃草一起，用思考通樂人生》入選博客來 22 周年慶活動： 2017 年的22個熱門話題！',
        products: [
          {
            link: 'https://goo.gl/82PRcc',
            image: 'vendor-1.png',
            name: '《現代草民哲學讀本》',
            price: '360',
          },
        ]
      },
    ], // end of sections
  },
});

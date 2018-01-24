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
    permalink: 'https://watchout.tw/news/12-ask',
    cover: {
      image: 'cover.png',
      issue: '第十二期',
      date: '2018年01月22日',
    },
    nav: {
      title: '轉型正義',
      toc: [
      {
        channel: 'lab',
        title: '重返一例一休現場',
      },
      {
        channel: 'ask',
        title: '罷免給問嗎',
      },
      {
        channel: 'edu',
        title: '烙哲學本月選文',
      },
      {
        channel: 'musou',
        title: '⟪勞基法⟫再修',
      },
      {
        channel: 'vendor',
        title: '暖心療癒組合',
      },
    ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'lab',
        name: '議題實驗室',
        title: '重返一例一休現場',
        description: '近日勞基法再掀修法討論，在本次勞基法正式進入立法院委員會討論前，讓我們先重返2016年底一例一休修法現場，回顧當時的修法重點。',
        articles: [
          {
            link: 'https://lab.watchout.tw/data-reports/5',
            thumbnail: 'lab-1.jpg',
            title: '一例一休勞基法修法，誰給勞工最多假？',
            text: [
              '立委提案戰力分析',
            ],
            },
            {
              link: 'https://lab.watchout.tw/data-reports/6',
              thumbnail: 'lab-2.jpg',
              title: '2016勞基法修法，哪些委員有提案或連署？',
              text: [
                '解析立委人際網路',
              ],
            },
          ]
        },
      {
        id: 'ask',
        name: '中正紀念堂轉型給問嗎',
        title: '中正紀念堂轉型', // 區塊標題
        description: '為擴大民意蒐集，加開3場願景工作坊！文化部於2017年7月啟動中正紀念堂轉型的社會討論計畫，將以「審議式民主公民討論」的方式進行，委託「沃草」團隊籌辦。透過充分的資訊提供，建構多元的討論方式，蒐集民眾對於中正紀念堂轉型的反思與發想，從中凝聚社會共識。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://goo.gl/8U9UPZ', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '中正紀念堂的未來討論', // 連結標題
            text: [ // 連結附加文字，分行
              '你對中正紀念堂的未來有什麼想像？馬上報名願景工作坊！',
            ],
          },
          {
            link: 'http://cks.moc.gov.tw/', // 連結網址
            thumbnail: 'ask-2.jpg', // 連結縮圖
            title: '中正紀念堂轉型給問嗎資訊平台', // 連結標題
            text: [ // 連結附加文字，分行
              '本站由沃草團隊執行、製作，網站的資訊包含過去威權統治時期的制度與事件、國家不當暴力的受害者、中正紀念堂的介紹，以及其他國家如何進行轉型正義、處理獨裁者象徵等案例。',
            ],
          },
        ],
      },
      {
        id: 'edu',
        name: '公民學院',
        title: '烙哲學本月選文',
        description: '本月選出三篇烙哲學精彩文章：《斜門歪道》這本哲學漫畫書為什麼值得推薦？「有病」究竟該讓誰來定義？如何定義？你知道什麼是「無條件基本收入」嗎？為什麼值得支持？',
        articles: [
          {
            link: 'http://citizenedu.tw/t/topic/2431', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '《斜門歪道》書評',
            text: [
              '作者：周詠盛',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/2408', // 連結網址
            thumbnail: 'edu-2.jpg',
            title: '「疾病」由誰來定義',
            text: [
              '作者：邢懷安',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/2446', // 連結網址
            thumbnail: 'edu-3.jpg',
            title: '天下有白吃的午餐？',
            text: [
              '作者：朱家安',
            ],
          },
        ],
        images: [ // 大圖
          {
           title: '康德散步',
           description: '中正紀念堂的爭議',
           url: 'walk-1.png',
           orientation: 'portrait',
           link: 'http://cks.moc.gov.tw/article/73992',
          },
        ],
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
       id: 'musou',
       name: '國會無雙',
       title: '《勞基法》再修', // 區塊標題
       description: '施行還未滿一年的「一例一休」在新閣揆賴清德上任後，就啟動「彈性化」修法，但這次修法方向能真的解決勞資雙方困境嗎？', // 區塊文字
       articles: [ // 連結們
         {
           link: 'https://musou.tw/focuses/1416', // 連結網址
           thumbnail: 'musou-1.jpg', // 連結縮圖
           title: '勞基法「預告版本」被朝野立委罵翻 林淑芬：資方要五毛勞動部給全部', // 連結標題
           text: [ // 連結附加文字，分行
             '記者：蕭長展',
           ],
         },
         {
           link: 'https://musou.tw/videos/1432', // 連結網址
           thumbnail: 'musou-2.jpg',
           title: '台灣勞工沒有過勞死？「地方的老闆」公聽會發言惹議',
           text: [
             '文字：洪國鈞',
             '影音：陳東',
           ],
         },
       ]
     },
      {
        id: 'vendor',
        name: '草地攤販',
        description: '中正紀念堂轉型討論工作坊再加開3場！第一場：2018/2/3（六）9:30-17:30。第二場：2018/2/4（日）9:30-17:30。第三場：2018/3/10（六）9:30-17:30。',
        products: [
          {
            link: 'https://goo.gl/8U9UPZ',
            image: 'vendor-1.png',
            name: '中正紀念堂轉型討論',
            price: '我要報名',
          },
        ],
      },
    ], // end of sections
  },
});

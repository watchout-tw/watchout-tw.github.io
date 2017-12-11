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
    permalink: 'https://watchout.tw/news/11-hb',
    cover: {
      image: 'cover.png',
      issue: '第十ㄧ期',
      date: '2017年12月8日',
    },
    nav: {
      title: '沃草四歲生日',
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
        name: '給問擂台',
        title: '黃國昌，罷免給問嗎', // 區塊標題
        description: '這將是《選罷法》於去年底三讀修正通過後，第一次有立委適用罷免新制，也是在罷免案成立後，黃國昌首次在網路上接受網友們的提問！', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://youtu.be/JGtaStX7Jnk', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '黃國昌罷免給問嗎', // 連結標題
            text: [ // 連結附加文字，分行
              '當日活動完整影音',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1438', // 連結網址
            thumbnail: 'ask-2.jpg', // 連結縮圖
            title: '平常心面對罷免 黃國昌：安定力量別再騙', // 連結標題
            text: [ // 連結附加文字，分行
              '作者：廖昱涵',
            ],
          },
        ]
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
           description: '對於酒駕者處以鞭刑，是個好主意嗎？',
           url: 'walk-1.png',
           orientation: 'portrait',
           link: 'http://citizenedu.tw/t/topic/2434 ',
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
        description: '一次擁有！黑熊．阿草雙面設計款抱枕，可以水洗不怕髒、枕心無拉鍊不割手；沃草首款米白系帆布袋，與台南府城近六十載的帆布老舖「合成帆布行」合作！',
        products: [
          {
            link: 'https://watchout.backme.tw/checkout/332/1888',
            image: 'vendor-1.png',
            name: '暖心療癒組（抱枕、帆布袋）',
            price: '900',
          },
        ]
      },
    ], // end of sections
  },
});

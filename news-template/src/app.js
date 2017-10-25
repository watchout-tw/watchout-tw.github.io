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
    permalink: 'https://watchout.tw/news/10-lab',
    cover: {
      image: 'cover.png',
      issue: '第十期',
      date: '2017年10月25日',
    },
    nav: {
      title: '議題實驗室',
      toc: [
        {
          channel: 'lab',
          title: '你罷免黃國昌了嗎',
        },
        {
          channel: 'ask',
          title: '桃園立委給問回顧',
        },
        {
          channel: 'edu',
          title: '烙哲學本月選文',
        },
        {
          channel: 'musou',
          title: '光輝十月（？）',
        },
        {
          channel: 'vendor',
          title: '歲末出清驚喜包',
        },
      ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'lab',
        name: '議題實驗室',
        title: '你罷免黃國昌了嗎',
        description: '台灣歷史上曾經發起數次的公民罷免，目前只有鄉鎮市民代表的層級曾經成功過，罷免是否能成為有效的公民監督工具，尚待觀察。',
        articles: [
          {
            link: 'https://lab.watchout.tw/data-reports/1',
            thumbnail: 'lab-1.jpg',
            title: '針對選罷法修法，誰提的罷免門檻最低？',
            text: [
              '立委提案戰力分析'
            ],
          },
          {
            link: 'https://lab.watchout.tw/data-reports/3',
            thumbnail: 'lab-2.jpg',
            title: '針對下修罷免門檻，哪些委員有提案或連署？',
            text: [
              '解析立委人際網路'
            ],
          },
        ]
      },
      {
        id: 'ask',
        name: '給問擂台',
        title: '桃園立委給問回顧', // 區塊標題
        description: '桃園立委給問9/23百人質詢結束，陳學聖、鄭運鵬立委回應公民提問，快來看完整影音及報導，了解立委如何回應犀利問題？', // 區塊文字
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
            link: 'https://musou.tw/focuses/1397', // 連結網址
            thumbnail: 'ask-2.jpg', // 連結縮圖
            title: '現場報導：外籍工遭襲胸，勞動部稱「友善碰觸」，立委怎麼回？', // 連結標題
            text: [ // 連結附加文字，分行
              '作者：蕭長展'
            ],
          },
        ]
      },
      {
        id: 'edu',
        name: '公民學院',
        title: '烙哲學本月選文',
        description: '本月選出三篇烙哲學精彩文章：要受害者保護自己，算是在譴責他嗎？我們為何無法對歷史不義道歉？政府為什麼應該補助PrEP？',
        articles: [
          {
            link: 'http://citizenedu.tw/t/topic/2327', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '誰在譴責受害者？',
            text: [
              '作者：黃韻竹',
            ],
          }
          {
            link: 'http://citizenedu.tw/t/topic/2343', // 連結網址
            thumbnail: 'edu-2.jpg',
            title: '對歷史的不義道歉',
            text: [
              '作者：賴天恆',
            ],
          }
          {
            link: 'http://citizenedu.tw/t/prep/2330', // 連結網址
            thumbnail: 'edu-3.jpg',
            title: '政府該補助PrEP',
            text: [
              '作者：馮一凡',
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
        title: '誰的光輝十月', // 區塊標題
        description: '過去「中華民國」政府常說「光輝十月」，強調「雙十節」、「光復節」跟台灣的關聯。現實真的如此嗎？讓沃草來告訴你「中華民國」有多荒謬吧！', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/focuses/1401', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: '【小測驗】測測看！你是中華民國人嗎？', // 連結標題
            text: [ // 連結附加文字，分行
              '內容編輯：洪國鈞、王希',
            ],
          },
          {
            link: 'https://musou.tw/videos/1406', // 連結網址
            thumbnail: 'musou-2.jpg',
            title: '【好球】「中華民國領土在哪裡？」王育敏犀利質詢驚呆四座！',
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
        description: '',
        products: [
          {
            link: 'https://watchout.backme.tw/checkout/332/2032',
            image: 'vendor-1.png',
            name: '《歲末出清驚喜包》',
            price: '799元',
          },
        ]
      },
    ], // end of sections
  },
});

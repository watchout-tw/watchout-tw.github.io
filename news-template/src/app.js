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
    permalink: 'https://watchout.tw/news/8-wam',
    cover: {
      image: 'cover.png',
      issue: '第八期',
      date: '2017年8月25日',
    },
    nav: {
      title: '917沃草年會',
      toc: [
        {
          channel: 'edu',
          title: '公民學院年會開跑',
        },
        {
          channel: 'ask',
          title: '台南立委給問精華',
        },
        {
          channel: 'musou',
          title: '沃草看世界',
        },
        {
          channel: 'vendor',
          title: '現代草民哲學讀本',
        },
      ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'edu',
        name: '公民學院',
        title: '公民學院年會開跑',
        description: '台港兩地共9個哲普團體參與，台灣最大哲學普及社群盛事，就在9月17日「沃草公民學院年會」！',
        articles: [
          {
            link: 'http://bit.ly/philos917 ', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '參加年會這邊請：',
            text: [
              '時間：2017年9月17日（日）',
              '地點：華山文創園區2F拱廳',
            ],
          }
        ],
        images: [ // 大圖
          {
            title: '康德散步',
            description: '有位國小老師在課堂上拿出假雞雞和保險套進行性教育，並說明女女男男的性行為，而被「特定團體」控告「猥褻、妨害風化」。這爭議怎麼看？',
            url: 'walk-1.png',
            orientation: 'portrait',
            link: 'https://www.facebook.com/citizenedu/photos/a.861134307356973.1073741836.501740576629683/1038932416243827/?type=1&theater ',
          },
        ],
      },
      {
        id: 'ask',
        name: '給問擂台',
        title: '台南立委給問精華', // 區塊標題
        description: '台南立委現場給問，超過150位公民與數十個公民團體上陣，提問砲火猛烈，也讓立委首度對許多議題公開承諾。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://youtu.be/QIjTHtIRZ1c', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '台南立委給問精華影片', // 連結標題
            text: [ // 連結附加文字，分行
              '剪輯：陳東'
            ],
          },
          {
            link: 'https://ask.watchout.tw/', // 連結網址
            thumbnail: 'ask-2.jpg', // 連結縮圖
            title: '了解更多立委給問', // 連結標題
            text: [ // 連結附加文字，分行
              '桃園台中高雄雙北，立委給問Coming soon'
            ],
          },
        ]
      },
      {
        id: 'musou',
        name: '國會無雙',
        title: '沃草。觀點', // 區塊標題
        description: '「媒體該不該有立場呢」？沃草認為，每個媒體都該有自己的立場和議題設定方向。請看「沃草觀點」，瞭解我們對議題的想法。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/focuses/1378', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: '觀點／大法官釋憲表態「保障婚姻平權」 立法院還在等風向嗎？', // 連結標題
            text: [ // 連結附加文字，分行
              '編輯：王希、劉家丞、洪國鈞',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1333', // 連結網址
            thumbnail: 'musou-2.jpg',
            title: '觀點／改革到位了嗎？「開放的國會」下一步在哪',
            text: [
              '編輯：洪國鈞',
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

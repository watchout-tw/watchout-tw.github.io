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
    permalink: 'https://watchout.tw/news/5-8824',
    cover: {
      image: 'cover.png',
      issue: '第五期',
      date: '2017年5月26日',
    },
    nav: {
      title: '8千8百億去哪裡',
      toc: [
        {
          channel: 'edu',
          title: '本月精選草民讀物',
        },
        {
          channel: 'ask',
          title: '沃草年度活動',
        },
        {
          channel: 'musou',
          title: '8千8百億，是前瞻，還是錢沾？',
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
        title: '本月精選草民讀物',
        description: '本月我們精選了三篇最熱門的烙哲學文章，包括海德格的精彩理論介紹、谷阿莫與著作權問題、以及一篇反同的保守主義解析！',
        articles: [
          {
            link: 'http://citizenedu.tw/t/topic/2039', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '語言如何召喚存在',
            text: [
              '作者：紀金慶',
              '主編：朱家安',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/2036', // 連結網址
            thumbnail: 'edu-2.jpg',
            title: '一分鐘看完谷阿莫？',
            text: [
              '作者：洪偉',
              '主編：朱家安',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/2014', // 連結網址
            thumbnail: 'edu-3.jpg',
            title: '保守主義如何反同',
            text: [
              '作者：張正昕',
              '主編：朱家安',
            ],
          },
        ],
        images: [ // 大圖
          {
            title: '康德散步',
            description: '同性性行為會上癮？應該戒斷？其實至今沒有實證研究證明這樣有效，甚至它們再次傷害「患者」。我們應該做的，是「矯正」社會中的歧視。',
            url: 'walk-1.png',
            orientation: 'portrait',
            link: 'https://www.facebook.com/citizenedu/photos/a.861134307356973.1073741836.501740576629683/967025033434566/?type=3&theater',
          },
        ],
      },
      {
        id: 'ask',
        name: '給問擂台',
        title: '2017給問擂台', // 區塊標題
        description: '以「直接、公開、對話」等原則，嘗試建構出政治人物與公民直接溝通的平台。透過分組討論的互動方式，也能讓公民理解代議政治的內涵。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://ask.watchout.tw/', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '什麼是給問', // 連結標題
            text: [ // 連結附加文字，分行
              '',
            ],
          },
          {
            link: 'https://youtu.be/9TniPc0D0r4', // 連結網址
            thumbnail: 'ask-2.jpg',
            title: '最新給問影音',
            text: [
              '',
            ],
          },
        ]
      },
      {
        id: 'musou',
        name: '國會無雙',
        title: '是前瞻，還是錢沾', // 區塊標題
        description: '前瞻條例在立法院審議期間不斷發生衝突，原應好好逐條討論的內容直接送黨團協商處理，在這樣粗糙立法的情況下，前瞻會不會變成「錢沾」呢？', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/focuses/1371', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: '藍委潑水叫囂 「前瞻」過關全案保留送出委員會交付協商', // 連結標題
            text: [ // 連結附加文字，分行
              '記者：蕭長展',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1366', // 連結網址
            thumbnail: 'musou-2.jpg',
            title: '前瞻條例民進黨應闖過關 學者痛批如「獨裁再現」',
            text: [
              '記者：蕭長展',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1363', // 連結網址
            thumbnail: 'musou-3.jpg',
            title: '黃國昌痛批馬政府激增國債 蔡政府「前瞻」未記取教訓',
            text: [
              '記者：蕭長展',
            ],
          },
          {
            link: 'https://musou.watchout.tw/draw/tsai-first-year/', // 連結網址
            thumbnail: 'musou-4.jpg',
            title: '【互動式圖表】蔡總統的第一年',
            text: [
              '編輯：蕭長展、洪國鈞',
              '設計開發：游知澔',
            ],
          },
        ]
      },
      {
        id: 'maa',
        name: '草漫',
        images: [
          {
            url: 'maa-1.png',
            orientation: 'landscape',
          },
        ],
      },
      {
        id: 'vendor',
        name: '草地攤販',
        description: '沃草烙哲學，推出第一本哲學書囉！《現代草民哲學讀本：跟沃草一起，用思考通樂人生》全面預購中！',
        products: [
          {
            link: 'https://goo.gl/82PRcc',
            image: 'vendor-1.png',
            name: '《現代草民哲學讀本》預購價',
            price: '284',
          },
        ]
      },
    ], // end of sections
  },
});

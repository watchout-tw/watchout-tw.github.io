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
    permalink: 'https://watchout.tw/news/7-terror30',
    cover: {
      image: 'cover.png',
      issue: '第七期',
      date: '2017年7月28日',
    },
    nav: {
      title: '解嚴30',
      toc: [
        {
          channel: 'edu',
          title: '解嚴30哲學思考',
        },
        {
          channel: 'ask',
          title: '2017年度專案',
        },
        {
          channel: 'musou',
          title: '你是戒嚴時期的誰',
        },
        {
          channel: 'vendor',
          title: '暖心療癒組合',
        },
      ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'edu',
        name: '公民學院',
        title: '本月精選草民讀物',
        description: '本月為各位精選三篇與解嚴、轉型正義相關的烙哲學文章：服從權威是怎麼回事？服從有什麼後果？有沒有「不合法」的法律？',
        articles: [
          {
            link: 'http://citizenedu.tw/t/topic/1982', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '不配是法律的法律',
            text: [
              '作者：陳冠廷',
              '主編：朱家安',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/1566', // 連結網址
            thumbnail: 'edu-2.jpg',
            title: '理性地服從權威？',
            text: [
              '作者：陳冠廷',
              '主編：朱家安',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/1663', // 連結網址
            thumbnail: 'edu-3.jpg',
            title: '服從權威的後果',
            text: [
              '作者：邱怡嘉',
              '主編：朱家安',
            ],
          },
        ],
        images: [ // 大圖
          {
            title: '康德散步',
            description: '有人拿船難畫問哲學家：「這麼多人被神救出，還不信神？」哲學家回：「是喔？那些被神拋下的人的畫像在哪？」這故事涉及了一個邏輯謬誤。',
            url: 'walk-1.png',
            orientation: 'portrait',
            link: 'https://www.facebook.com/citizenedu/photos/a.861134307356973.1073741836.501740576629683/1020425458094523/?type=3&theater',
          },
        ],
      },
      {
        id: 'ask',
        name: '給問擂台',
        title: '六都立委給問嗎', // 區塊標題
        description: '給問擂台下半年度大計畫「六都立委給問嗎」，第一站-台南，圓滿成功！', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/focuses/1386', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '台南立委如何談一例一休', // 連結標題
            text: [ // 連結附加文字，分行
              '記者：薛翰駿'
            ],
          },
          {
            link: 'https://youtu.be/7R-Ul0gMvTg', // 連結網址
            thumbnail: 'ask-2.jpg', // 連結縮圖
            title: '台南立委給問嗎', // 連結標題
            text: [ // 連結附加文字，分行
              '活動當日完整直播影音'
            ],
          },
          {
            link: 'https://ask.watchout.tw/', // 連結網址
            thumbnail: 'ask-3.jpg', // 連結縮圖
            title: '了解更多六都立委給問', // 連結標題
            text: [ // 連結附加文字，分行
              '桃園台中高雄雙北Coming soon'
            ],
          },
        ]
      },
      {
        id: 'musou',
        name: '國會無雙',
        title: '解嚴三十', // 區塊標題
        description: '執政黨把「促進轉型正義條例」擱置在立法院，而用音樂節來紀念解嚴30週年。在徹底遺忘轉型正義前，先來看看「你是戒嚴時代的誰」吧。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.watchout.tw/role-play/terror-30/', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: '你是戒嚴時代的誰呢？', // 連結標題
            text: [ // 連結附加文字，分行
              '編輯：洪國鈞、薛翰駿、蕭長展',
              '設計：游知澔',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1326', // 連結網址
            thumbnail: 'musou-2.jpg',
            title: '【互動地圖】重返二二八起點',
            text: [
              '編輯：洪國鈞、薛翰駿、蕭長展',
              '設計：林家偉',
            ],
          },
        ]
      },
      {
        id: 'maa',
        name: '草漫',
        images: [
          {
            link: 'https://www.facebook.com/pg/watchout.tw/photos/?tab=album&album_id=795478310610384',
            url: 'maa-1.png',
            orientation: 'landscape',
          },
        ],
      },
      {
        id: 'vendor',
        name: '草地攤販',
        description: '一次擁有！黑熊・阿草雙面設計款抱枕，可以水洗不怕髒、枕心無拉鏈不割手😘 沃草首款米白系帆布袋，與台南府城近六十載的帆布老舖「合成帆布行」合作😊',
        products: [
          {
            link: 'https://watchout.backme.tw/checkout/332/1888',
            image: 'vendor-1.jpg',
            name: '暖心療癒組（抱枕、帆布袋）',
            price: '900',
          },
        ]
      },
    ], // end of sections
  },
});

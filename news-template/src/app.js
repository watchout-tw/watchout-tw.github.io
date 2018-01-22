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
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
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
        ],
      },
    ], // end of sections
  },
});

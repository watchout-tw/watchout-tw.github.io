var app = new Vue({
  el: '#app',
  methods: {
    getLogoURL: function(id) {
      return 'https://watchout.tw/asset/logo/' + id + '/small.png';
    },
    getAssetURL: function(filename) {
      return 'asset/' + filename;
    },
  },
  data: {
    cover: {
      image: 'cover.png',
      issue: '第四期',
      date: '2017年4月28日',
    },
    nav: {
      title: '說好的轉型正義呢',
      toc: [
        {
          channel: 'musou',
          title: '促轉條例修法回顧',
        },
        {
          channel: 'edu',
          title: '哲學人看轉型正義',
        },
      ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'musou',
        name: '國會無雙',
        title: 'lalalaal', // 區塊標題
        description: 'sdfjhaslkfjhaslkjahwrlkaesjhrlaskjrhsealkrjh', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/ffsdfs', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: 'sdfskljflskdf', // 連結標題
            text: [ // 連結附加文字，分行
              '製作：沃草團隊',
              'Powered by PlotDB',
            ],
          },
          {
            link: 'https://musou.tw/ffsdfs', // 連結網址
            thumbnail: 'musou-1.jpg',
            title: 'sdfskljflskdf',
            text: [
              'sdlfkjl',
              'sdflkjd',
              'werlkj',
            ],
          },
          {
            link: 'https://musou.tw/ffsdfs', // 連結網址
            thumbnail: 'musou-1.jpg',
            title: 'sdfskljflskdf',
            text: [
              'sdlfkjl',
              'sdflkjd',
              'werlkj',
            ],
          },
        ]
      },
      {
        id: 'maa',
        name: '草漫',
        images: [
          {
            url: 'maa-1.jpg',
          },
        ],
      },
      {
        id: 'edu',
        name: '公民學院',
        title: '烙哲學本月精選',
        description: '性愛機器人，帶來的究竟是進步，還是全新的道德危機？',
        articles: [
          {
            link: 'https://musou.tw/ffsdfs', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: 'sdfskljflskdf',
            text: [
              'sdlfkjl',
              'sdflkjd',
              'werlkj',
            ],
          },
          {
            link: 'https://musou.tw/ffsdfs', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: 'sdfskljflskdf',
            text: [
              'sdlfkjl',
              'sdflkjd',
              'werlkj',
            ],
          },
        ],
        images: [ // 大圖
          {
            title: 'Kant',
            description: 'sdflksjdflkdsjf',
            url: 'walk-1.jpg',
            link: 'https://www.facebook.com/citizenedu/photos/a.861134307356973.1073741836.501740576629683/938758312927905/',
          },
        ],
      },
      {
        id: 'vendor',
        name: '草地攤販',
        title: '限量商品',
        description: '',
        products: [
          {
            link: 'https://watchout.backme.tw/cashflow/confirm/f37cf1ce-e969-4b37-9327-db3c407fc8dd?locale=zh-TW',
            image: 'vendor-1.png',
            name: 'sdflsdkjf',
            price: '300',
          },
        ]
      },
    ],
  },
});

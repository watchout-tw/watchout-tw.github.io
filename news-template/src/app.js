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
    permalink: 'https://watchout.tw/news/6-ask',
    cover: {
      image: 'cover.png',
      issue: '第六期',
      date: '2017年6月30日',
    },
    nav: {
      title: '沃草給問擂台',
      toc: [
        {
          channel: 'edu',
          title: '豪雨是上帝發怒？',
        },
        {
          channel: 'ask',
          title: '沃草年度活動',
          channel: 'ask',
          title: '六都立委給問',
        },
        {
          channel: 'musou',
          title: '走上街頭聆聽基層',
        },
        {
          channel: 'vendor',
          title: '沃草吉祥物Ｌ夾',
        },
      ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'edu',
        name: '公民學院',
        title: '本月精選草民讀物',
        description: '本月為各位精選三篇烙哲學文章。最熱門的文章是朱家安的〈該如何回答「哲學到底能幹嘛」的沒禮貌問題？〉，歡迎一起來烙哲學。',
        articles: [
          {
            link: 'http://citizenedu.tw/t/topic/2072', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '克蘇魯神話形上學',
            text: [
              '作者：洪偉',
              '主編：朱家安',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/2085', // 連結網址
            thumbnail: 'edu-2.jpg',
            title: '哲學是能幹嘛？',
            text: [
              '作者：朱家安',
              '主編：洪偉',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/2094', // 連結網址
            thumbnail: 'edu-3.jpg',
            title: '性侵防治哲學問題',
            text: [
              '作者：賴天恆',
              '主編：朱家安',
            ],
          },
        ],
        images: [ // 大圖
          {
            title: '康德散步',
            description: '天下起了豪大雨，氣象局指出是因為鋒面滯留使得雨量過度集中造成的，但有些人認為是上帝發怒造成的，這該怎麼說明？請點圖片。',
            url: 'walk-1.png',
            orientation: 'portrait',
            link: 'http://citizenedu.tw/t/topic/2080',
          },
        ],
      },
      {
        id: 'ask',
        name: '給問擂台',
        title: '2017年 年度計畫', // 區塊標題
        description: '第一站-台南！五位區域立委全部報到！', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfIznEw7Wd1ZvS1phhpdJnYR6EmLWkTIJywxsNnv1-EHdt7Dw/viewform', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '7/8台南立委給問嗎？快來報名', // 連結標題
            text: [ // 連結附加文字，分行
              '',
            ],
          },
        ]
      },
      {
        id: 'musou',
        name: '國會無雙',
        title: '沃草街訪', // 區塊標題
        description: '公教人員年金改革法案即將於第一次立法院臨時會通過，而這一年來他們多次走上街頭向政府嗆聲，到底他們的心聲為何？沃草帶大家一起來聽聽看。', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/videos/1380', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: '沃草街訪》「警察節」反年改團體再戰街頭 退休學長怎麼說', // 連結標題
            text: [ // 連結附加文字，分行
              '記者：洪國鈞 陳東 蕭長展',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1366', // 連結網址
            thumbnail: 'musou-2.jpg',
            title: '沃草接訪》329現場直擊 反年金改革團體衝撞街頭',
            text: [
              '記者：陳東 王希 洪國鈞 蕭長展',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1363', // 連結網址
            thumbnail: 'musou-3.jpg',
            title: '沃草街訪》凱道上抗爭的軍公教怎麼看年金改革？',
            text: [
              '記者：薛翰駿 陳東',
            ],
          },
        ]
      },
      {
        id: 'maa',
        name: '草漫',
        images: [
          {
            link: 'https://www.facebook.com/pg/watchout.tw/photos/?tab=album&album_id=795478310610384'
            url: 'maa-1.png',
            orientation: 'landscape',
          },
        ],
      },
      {
        id: 'vendor',
        name: '草地攤販',
        description: '有些資料，值得用阿草文件夾細．心．收．藏。那年他寫給你的情書，那封來自遠方的明信片，或是你跟他去過海邊的照片，這些充滿回憶、無法抹去的文件資料，你都收在哪呢？',
        products: [
          {
            link: 'https://watchout.backme.tw/checkout/332/2962',
            image: 'vendor-1.jpg',
              image: 'vendor-2.jpg',
            name: '沃草吉祥物Ｌ夾（一式兩入）',
            price: '110',
          },
        ]
      },
    ], // end of sections
  },
});

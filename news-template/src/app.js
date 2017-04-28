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
    common: CommonData,
    permalink: 'https://watchout.tw/news/4',
    cover: {
      image: 'cover.png',
      issue: '第四期',
      date: '2017年4月28日',
    },
    nav: {
      title: '好山好水好好挖？',
      toc: [
        {
          channel: 'musou',
          title: '好山，不挖嗎？',
        },
        {
          channel: 'edu',
          title: '人與環境的倫理學',
        },
        {
          channel: 'vendor',
          title: '台北國際拒馬展',
        },
      ],
    },
    sections: [ // 這個陣列包含這一期草報的每個區塊
      {
        id: 'musou',
        name: '國會無雙',
        title: '財團原民兩樣情', // 區塊標題
        description: '現行礦業法讓財團不需地主同意就可在私有地採礦，但政府在劃設原民土地時，又以憲法保障私有財產為由提出「袋住先」的辦法，這公平嗎？', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://musou.tw/focuses/1343', // 連結網址
            thumbnail: 'musou-1.jpg', // 連結縮圖
            title: '經濟部：無法撤銷亞泥礦權延期許可；學者：當然可以', // 連結標題
            text: [ // 連結附加文字，分行
              '文字：薛翰駿',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1350', // 連結網址
            thumbnail: 'musou-2.jpg',
            title: '觀點／憑什麼要原住民「袋住先」？',
            text: [
              '文字：薛翰駿',
            ],
          },
          {
            link: 'https://musou.tw/focuses/1334', // 連結網址
            thumbnail: 'musou-3.jpg',
            title: '原民會堅持私有地開發不需部落同意；林昶佐：聽不下去',
            text: [
              '文字：薛翰駿',
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
        id: 'edu',
        name: '公民學院',
        title: '烙哲學本月精選',
        description: '這次，我們為大家精選了兩篇哲學思辨文章。賴天恆的《21世紀新倫理議題》談了彼得・辛格最近的一次著名演講；張正昕說明了一種哲學理論，試圖讓我們釐清保守主義是一種怎樣的主張。歡迎一起烙哲學！',
        articles: [
          {
            link: 'http://citizenedu.tw/t/peter-singer/2007', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '21世紀新倫理議題',
            text: [
              '作者：賴天恆',
              '主編：朱家安',
            ],
          },
          {
            link: 'http://citizenedu.tw/t/topic/2003', // 連結網址
            thumbnail: 'edu-2.jpg',
            title: '保守主義有道理嗎',
            text: [
              '作者：張正昕',
              '主編：朱家安',
            ],
          },
        ],
        images: [ // 大圖
          {
            title: '康德散步',
            description: '4月11日，立法院三讀通過了《動物保護法》修正案，明定禁止食用貓狗。台灣成為亞洲第一個禁止貓肉、狗肉的國家。',
            url: 'walk-1.png',
            orientation: 'portrait',
            link: 'https://www.facebook.com/citizenedu/photos/a.861134307356973.1073741836.501740576629683/967025033434566/?type=3&theater',
          },
        ],
      },
      {
        id: 'vendor',
        name: '草地攤販',
        description: '還記得，2014年服貿爭議時，台北國際拒馬展的盛況嗎？2017年，在反年改團體抗議下，國際拒馬展全新開張！立刻收藏限量復刻《台北國際拒馬展》紙膠帶，重溫拒馬帶給你的感動！',
        products: [
          {
            link: 'https://watchout.backme.tw/checkout/332/1572',
            image: 'vendor-1.jpg',
            name: '《台北國際拒馬展》紙膠帶（三入）',
            price: '300',
          },
        ]
      },
    ], // end of sections
  },
});

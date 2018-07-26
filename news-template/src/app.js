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
    permalink: 'https://watchout.tw/news/15-annual',
    cover: {
      image: 'cover.png',
      issue: '第十五期',
      date: '2018年07月27日',
    },
    nav: {
      title: '沃草年會 公民出任務',
      toc: [
      {
        channel: 'ask',
        title: '六都均有市長候選人參戰，等你來問',
      },
      {
        channel: 'edu',
        title: '？？？',
      },
      {
        channel: 'musou',
        title: '塑膠王國不塑島',
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
        name: '活動快訊',
        title: '公民出任務 草民獨享',
        description: '《公民出任務》現正報名中！凡是具有草民身份，即可享草民專屬活動票價1,500元/人。本次活動不僅邀來新媒體與人社科普團體，分享如何找出好內容，更獨家傳授破解假資訊、解構時事議題的祕技。《給問擂台》還邀請到各黨派政治人物，讓你直接挑戰問政，實踐直接民權！絕對不能錯過！',
        articles: [
          {
            link: 'https://watchout.tw/events/180818/',
            thumbnail: 'lab-1.jpg',
            title: '沃草年會《公民出任務》',
            text: [
              '史上最強公民戰隊！沃草邀你組隊對抗混沌媒體時代！',
            ],
            },
            {
              link: 'https://www.accupass.com/go/watchoutmission',
              thumbnail: 'lab-2.jpg',
              title: '沃草年會《公民出任務》草民獨享優惠',
              text: [
                '只有草民專屬優惠，快來跟沃草一起出任務！',
              ],
            },
          ]
        },
      {
        id: 'ask',
        name: '給問擂台',
        title: '六都候選人參戰給問', // 區塊標題
        description: '蘇貞昌、陳學聖、吳益政、姚文智、林義豐、林佳龍、許忠信、蘇煥智等市長候選人陸續宣布加入「六都市長給問嗎」網站，承諾將會回應網站上公民的提問。好公民，不問嗎？', // 區塊文字
        articles: [ // 連結們
          {
            link: 'https://ask.watchout.tw/', // 連結網址
            thumbnail: 'ask-1.jpg', // 連結縮圖
            title: '候選人等你來問', // 連結標題
            text: [ // 連結附加文字，分行
              '候選人陸續加入網站給問，快來看有哪些熱門問題？',
            ],
          },
          {
            link: 'https://www.facebook.com/watchout.tw/videos/987581368066743/', // 連結網址
            thumbnail: 'ask-2.jpg', // 連結縮圖
            title: '「六都市長給問嗎」首支宣傳影片上線啦', // 連結標題
            text: [ // 連結附加文字，分行
              '快來跟呱吉、苗博雅、視網膜一起問市長們問題',
            ],
          },
        ],
      },
      {
        id: 'edu',
        name: '公民學院',
        title: '人有「生命自主權」嗎？',
        description: '隨著人權觀念進步，個人選擇病痛時醫療處置方式的「自主權」與獲得「善終」等生命權利，逐漸受到社會重視。不過，無論是已三讀的《病人自主權利法》中「預立醫療決定」的條文，或者是「安樂死」合法化，都仍有爭議。在社會邁向高齡化的今天，一起思辨這個重要議題。',
        articles: [
          {
            link: 'https://bit.ly/2L6jqDD', // 連結網址
            thumbnail: 'edu-1.jpg',
            title: '安樂死：我們可以決定自己的死亡嗎？',
            text: [
              '作者：張智皓',
            ],
          },
          {
            link: ' https://bit.ly/2LkSOym', // 連結網址
            thumbnail: 'edu-2.jpg',
            title: '瞭解受苦才能減緩受苦：建構醫學理論的新樞紐',
            text: [
              '作者：邢懷安',
            ],
          },
        ],
        images: [ // 大圖
          {
           title: '康德散步',
           description: '「安樂死」會上天堂還是下地獄？',
           url: 'walk-1.png',
           orientation: 'portrait',
           link: ' https://bit.ly/2mrLHWA',
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
       title: '塑膠王國不塑島', // 區塊標題
       description: '台灣曾經被稱為「塑膠王國」，但這樣的稱號未來將不復存在。民間團體和環保署共同成立的「海廢治理平台」，加速推動了限塑政策，未來除了吸管，購物用塑膠袋、免洗餐具、外帶飲料杯等也將逐步禁用，面對「無塑生活」，你準備好了嗎？', // 區塊文字
       articles: [ // 連結們
         {
           link: 'https://musou.tw/focuses/1502', // 連結網址
           thumbnail: 'musou-1.jpg', // 連結縮圖
           title: '還在煩惱未來不能用吸管？你最想問的限塑政策七問！', // 連結標題
           text: [ // 連結附加文字，分行
             '作者：廖昱涵',
           ],
         },
         {
           link: 'https://musou.tw/focuses/1503', // 連結網址
           thumbnail: 'musou-2.jpg',
           title: '詹順貴：限塑「不便」是必然 別讓下一代抱怨我們太隨便',
           text: [
             '作者：廖昱涵',
           ],
         },
         {
           link: 'https://musou.tw/focuses/1504', // 連結網址
           thumbnail: 'musou-3.jpg',
           title: '半年就加速限塑政策 幕後的「海廢治理平台」是何方神聖？',
           text: [
             '作者：廖昱涵',
           ],
         },
       ]
     },
      {
        id: 'vendor',
        name: '草地攤販',
        description: '一次擁有！黑熊･阿草雙面設計款抱枕，可以水洗不怕髒、枕心無拉鍊不割手；沃草首款米白系帆布袋，與台南府城近六十載的帆布老舖「合成帆布行」合作！',
        products: [
          {
            link: 'https://watchout.backme.tw/checkout/332/1888',
            image: 'vendor-1.png',
            name: '暖心療癒組（抱枕、帆布袋）',
            price: '$900',
          },
        ],
      },
    ], // end of sections
  },
});

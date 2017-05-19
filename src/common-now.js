var CommonData = {
  links: {
    home: 'https://watchout.tw/',
    support: 'https://watchout.tw/#support',
    contact: 'https://watchout.tw/contact',
  },
};

var Channel = function(id, width, home, name) {
  this.id = id;
  this.name = name;
  this.classes = {
    bg: 'bg-' + this.id,
  };
  this.links = {
    home: home,
  };
  this.asset = {
    logo: {
      large: window.CommonData.links.home + 'asset/logo/' + this.id + '/large.png',
      small: window.CommonData.links.home + 'asset/logo/' + this.id + '/small.png',
    },
    logoWithType: {
      regular: {
        src: window.CommonData.links.home + 'asset/logo+type/' + this.id + '/regular.png',
        width: width,
        style: { width: width + 'px' },
      },
    },
  };
};

CommonData.channels = {
  park:  new Channel('park', 212, 'https://park.watchout.tw/', '中央公園'),
  lab:   new Channel('lab', 232, 'https://lab.watchout.tw/', '議題實驗室'),
  musou: new Channel('musou', 212, 'https://musou.watchout.tw/', '國會無雙'),
  ask:   new Channel('ask', 232, 'https://ask.watchout.tw/', '給問擂台'),
  edu:   new Channel('edu', 212, 'https://edu.watchout.tw/', '公民學院'),
  maa:   new Channel('maa', 132, 'https://maa.watchout.tw/', '草漫'),
  woo:   new Channel('woo', 154, 'https://woo.watchout.tw/', '沃影音'),
  ly:    new Channel('ly', 212, 'https://ly.watchout.tw/', '立委履歷'),
  watchout: new Channel('watchout', 274, CommonData.links.home, '沃草'),
};

Vue.component('nav-bar-simple', {
  props: {
    channel: Object,
  },
  template: `
  <nav class="navbar sticky-top navbar-light" :class="channel.classes.bg">
    <a class="navbar-brand" :href="channel.links.home"><img :src="channel.asset.logoWithType.regular.src" class="logo-type" :style="channel.asset.logoWithType.regular.style"/></a>
  </nav>
  `,
});

var footer = new Vue({
  el: 'footer',
  data: {
    common: CommonData,
    social: [
      {
        type: 'facebook',
        image: 'https://graph.facebook.com/watchout.tw/picture?type=large',
        message: '追蹤我們的最新動態！',
        link: 'https://facebook.com/watchout.tw/',
      },
      {
        type: 'LINE',
        image: 'https://watchout.tw/asset/social/LINE/goodfriend.png',
        message: '阿草好朋友',
        link: 'https://store.line.me/stickershop/product/1024870/zh-Hant',
      },
      {
        type: 'LINE',
        image: 'https://watchout.tw/asset/social/LINE/goodcitizen.png',
        message: '阿草督督好',
        link: 'https://store.line.me/stickershop/product/1224270/zh-Hant',
      },
    ],
    cluster: [
      {
        title: '沃草產品',
        links: [
          {
            title: '國會無雙',
            link: 'https://musou.tw/',
          },
          {
            title: '給問擂台',
            link: 'https://ask.watchout.tw/',
          },
          {
            title: '公民學院',
            link: 'https://citizenedu.tw/',
          },
        ],
      },
      {
        title: '關於沃草',
        links: [
          {
            title: '2014 透明報告',
            link: 'https://watchout.tw/transparency/2014',
          },
          {
            title: '歷年影響力報告',
            link: 'https://watchout.tw/impact',
          },
          {
            title: '聯絡我們',
            link: 'https://watchout.tw/contact',
          },
          {
            title: '授權條款',
            link: 'https://watchout.tw/license',
          },
        ],
      },
    ],
    trees: [
      {
        type: 'tree',
        name: 'deliberate',
        filetype: 'png',
      },
      {
        type: 'tree',
        name: 'discover',
        filetype: 'png',
      },
      {
        type: 'tree',
        name: 'investigate',
        filetype: 'png',
      },
      {
        type: 'farmer',
        name: 'tangerine',
        filetype: 'png',
      },
      {
        type: 'farmer',
        name: 'green',
        filetype: 'png',
      },
      {
        type: 'farmer',
        name: 'brown',
        filetype: 'png',
      },
      {
        type: 'tree',
        name: 'sprout',
        filetype: 'png',
      },
    ]
  },
  methods: {
    patchCount: function() {
      return 4 + Math.round(Math.random()*2);
    },
    patchSize: function() {
      return Math.random() > 0.5 ? 'big' : 'small';
    },
    patchStyles: function(i) {
      return {
        transform: 'translateX(' + (Math.round(Math.random())*2 - 1)*Math.round(Math.random()*16) + 'rem)',
      };
    },
    getTreeAssetURL: function(tree) {
      return this.common.links.home + 'asset/footer/' + tree.type + '/' + tree.name + '.' + tree.filetype;
    },
    getTreeClasses: function(tree) {
      return [tree.type, tree.type + '-' + tree.name];
    }
  },
  computed: {
    cptSocialGroups: function() {
      var arr = this.social;
      var result = [];
      var types = {};
      for(var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if(!(cur.type in types)) {
          types[cur.type] = {type: cur.type, items: []};
          result.push(types[cur.type]);
        }
        types[cur.type].items.push(cur);
      }
      return result;
    },
  },
  template: `
  <footer>
    <div class="land">
      <div class="green"></div>
      <div class="soil">
        <div class="light"></div>
        <div class="dark"></div>
        <div class="deep">
          <div class="social">
            <div v-for="group in cptSocialGroups" class="group d-flex flex-row justify-content-around" :type="group.type">
              <a v-for="item in group.items" :href="item.link" class="link a-block" target="social">
                <div class="image">
                  <img :src="item.image" />
                  <div class="type"></div>
                </div>
                <div class="message">{{ item.message }}</div>
              </a>
            </div>
          </div>
          <div class="cluster d-flex flex-row justify-content-center">
            <div v-for="group in cluster" class="group">
              <h5>{{ group.title }}</h5>
              <div v-for="item in group.links" class="item"><a :href="item.link" class="a-text">{{ item.title }}</a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="elements">
        <div class="grass d-flex align-items-end justify-content-between">
          <div v-for="i in patchCount()" class="patch" :class="patchSize()" :style="patchStyles(i)"></div>
        </div>
        <img v-for="tree in trees" :src="getTreeAssetURL(tree)" :class="getTreeClasses(tree)" />
      </div>
    </div>
  </footer>
  `
});

var pitcher = new Vue({
  el: '#pitcher',
  data: {
    common: CommonData,
  },
  template: `
  <div id="pitcher">
    <a class="button" :href="common.links.support" target="support"></a>
    <a class="close" href="#" @click.stop.prevent="close">×</a>
  </div>
  `,
  methods: {
    close: function(event) {
      $(this.$el).hide();
    }
  }
});

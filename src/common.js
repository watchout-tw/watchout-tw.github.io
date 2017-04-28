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

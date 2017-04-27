var CommonData = {
  links: {
    home: 'https://watchout.tw/',
    support: 'https://watchout.tw/#support',
  },
};

var Channel = function(id, name, width, home) {
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
      regular: window.CommonData.links.home + 'asset/logo+type/' + this.id + '/regular.png',
      width: width,
    },
  };
};

CommonData.channels = {
  park:  new Channel('park', '中央公園', 212, 'https://park.watchout.tw/'),
  lab:   new Channel('lab', '議題實驗室', 232, 'https://lab.watchout.tw/'),
  musou: new Channel('musou', '國會無雙', 212, 'https://musou.watchout.tw/'),
  ask:   new Channel('ask', '給問擂台', 232, 'https://ask.watchout.tw/'),
  edu:   new Channel('edu', '公民學院', 212, 'https://edu.watchout.tw/'),
  maa:   new Channel('maa', '草漫', 132, 'https://maa.watchout.tw/'),
  woo:   new Channel('woo', '沃影音', 154, 'https://woo.watchout.tw/'),
  ly:    new Channel('ly', '立委履歷', 212, 'https://ly.watchout.tw/'),
  watchout: new Channel('watchout', '沃草', 274, CommonData.links.home),
};

Vue.component('nav-simple', {
  props: {
    channel: {
      type: Object,
      validator: function(data) {
        return true;
      }
    },
  },
  template: `
  <nav class="navbar sticky-top navbar-light" :class="channel.classes.bg">
    <a class="navbar-brand" :href="channel.links.home"><img :src="channel.asset.logoWithType.regular" class="logo-type"/></a>
  </nav>
  `,
});

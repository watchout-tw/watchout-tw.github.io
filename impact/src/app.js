var app = new Vue({
  el: '#app',
  methods: {
    paths: function(file) {
      return {
        compact: this.common.links.home + 'asset/banners/' + file + '-compact.png',
        wide: this.common.links.home + 'asset/banners/' + file + '-wide.png',
      };
    }
  },
  computed: {
  },
  data: {
    common: CommonData,
    reports: [
      {
        year: 2016,
        link: 'Watchout-Impact-Report-2016.pdf',
        banner: 'impact-report-2016',
      },
    ],
  }
});

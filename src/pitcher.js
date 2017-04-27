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

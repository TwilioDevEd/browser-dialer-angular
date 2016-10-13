(function(app) {
  app.StatusLogComponent =
    ng.core.Component({
      selector: 'statuslog',
      template: `
    <!-- Status logging -->
    <div class="log">{{ status }}</div>
    <p>{{ summary }}</p>`,
      inputs: ['status', 'summary']
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
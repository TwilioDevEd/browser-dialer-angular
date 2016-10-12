(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'dialer-app',
      template: `
  <div id="dialer">
    <!-- Dialer input -->
    <div class="input-group input-group-sm">
      <!-- Create a country code dropdown -->
      <div class="input-group-btn">
        <button type="button" class="btn btn-default dropdown-toggle" 
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            +<span class="country-code">{{ selectedCountryCode }}</span>
            <i class="fa fa-caret-down"></i>
        </button>

        <ul class="dropdown-menu">
          <li *ngFor="let country of countries">
            <a href="#" (click)="selectCountry(country)">
              <div class="flag flag-{{country.code}}"></div>
              <span>{{country.name}} (+{{country.cc}})</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Telephone input field -->
      <input value="{{ currentNumber }}" type="tel" class="form-control" placeholder="555-666-7777">
    </div>
  </div>`
    })
    .Class({
      constructor: function() {
        this.currentNumber = '';
        this.selectedCountryCode = '1';
        this.countries = [
          { name: 'United States', cc: '1', code: 'us' },
          { name: 'Great Britain', cc: '44', code: 'gb' },
          { name: 'Colombia', cc: '57', code: 'co' },
          { name: 'Ecuador', cc: '593', code: 'ec' },
          { name: 'Estonia', cc: '372', code: 'ee' },
          { name: 'Germany', cc: '49', code: 'de' },
          { name: 'Hong Kong', cc: '852', code: 'hk' },
          { name: 'Ireland', cc: '353', code: 'ie' },
          { name: 'Singapore', cc: '65', code: 'sg' },
          { name: 'Spain', cc: '34', code: 'es' },
          { name: 'Brazil', cc: '55', code: 'br' },
        ];
      },
      selectCountry: function(country) {
        this.selectedCountryCode = country.cc;
      }
    });
})(window.app || (window.app = {}));
(function(app) {
  app.DialerInputComponent =
    ng.core.Component({
      selector: 'dialer-input',
      outputs: ['onChangeNumber'],
      template: `
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
      <input type="tel" class="form-control" placeholder="555-666-7777"
          (keyup)="changeNumber($event)">
    </div>
`
    })
    .Class({

      constructor: function() {
        this.selectedCountryCode = '1';
        this.localNumber = '';
        this.onChangeNumber = new ng.core.EventEmitter();
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

      changeNumber: function(event) {
        this.localNumber = event.target.value;

        this.emitChangeNumber();
      },

      selectCountry: function(country) {
        this.selectedCountryCode = country.cc;

        this.emitChangeNumber();
      },

      emitChangeNumber: function() {
        this.onChangeNumber.emit({
          countryCode: this.selectedCountryCode,
          localNumber: this.localNumber,
          fullNumber: `+${this.selectedCountryCode}${this.localNumber}`,
          isValid: /^([0-9]|#|\*)+$/.test(this.localNumber.replace(/[-()\s]/g,''))
        });
      }

    });
})(window.app || (window.app = {}));
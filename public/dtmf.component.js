(function(app) {
  app.DtmfComponent =
    ng.core.Component({
      selector: 'dtmf',
      template: `
    <!-- DTMF Tone interface -->
    <div class="keys">
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="sendDigit('1')">1</button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('2')">2
          <span>A B C</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('3')">3
          <span>D E F</span>
        </button>
      </div>
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="sendDigit('4')">4
          <span>G H I</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('5')">5
          <span>J K L</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('6')">6
          <span>M N O</span>
        </button>
      </div>
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="sendDigit('7')">7
          <span>P Q R S</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('8')">8
          <span>T U V</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('9')">9
          <span>W X Y Z</span>
        </button>
      </div>
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="sendDigit('*')">*</button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('0')">0</button>
        <button class="btn btn-circle btn-default" (click)="sendDigit('#')">#</button>
      </div>
    </div>`
    })
    .Class({
      constructor: function() {},

      // Handle numeric buttons
      sendDigit: function(digit) {
        Twilio.Device.activeConnection().sendDigits(digit);
      }
    });
})(window.app || (window.app = {}));
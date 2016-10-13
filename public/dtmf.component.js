(function(app) {
  app.DtmfComponent =
    ng.core.Component({
      selector: 'dtmf',
      outputs: ['onDigitClick'],
      template: `
    <!-- DTMF Tone interface -->
    <div class="keys">
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="clickDigit('1')">1</button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('2')">2
          <span>A B C</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('3')">3
          <span>D E F</span>
        </button>
      </div>
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="clickDigit('4')">4
          <span>G H I</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('5')">5
          <span>J K L</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('6')">6
          <span>M N O</span>
        </button>
      </div>
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="clickDigit('7')">7
          <span>P Q R S</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('8')">8
          <span>T U V</span>
        </button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('9')">9
          <span>W X Y Z</span>
        </button>
      </div>
      <div class="key-row">
        <button class="btn btn-circle btn-default" (click)="clickDigit('*')">*</button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('0')">0</button>
        <button class="btn btn-circle btn-default" (click)="clickDigit('#')">#</button>
      </div>
    </div>`
    })
    .Class({

      constructor: function() {
        this.onDigitClick = new ng.core.EventEmitter();
      },

      // Handle numeric buttons
      clickDigit: function(digit) {
        this.onDigitClick.emit(digit);
      }

    });
})(window.app || (window.app = {}));
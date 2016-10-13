(function(app) {
  app.AudioControlsComponent =
    ng.core.Component({
      selector: 'audio-controls',
      inputs: ['onPhone', 'disabled', 'muted'],
      outputs: ['onClickCall', 'onClickMute'],
      template: `
    <!-- Audio Controls -->
    <div class="controls">
      <button class="btn btn-circle" 
          [ngClass]="{'btn-danger': onPhone, 'btn-success': !onPhone}"
          (click)="clickCall()" [disabled]="disabled">
        <i class="fa fa-fw"
            [ngClass]="{'fa-close': onPhone, 'fa-phone': !onPhone}"></i>
      </button>
      <button class="btn btn-circle btn-default"
          *ngIf="onPhone" (click)="clickMute()">
        <i class="fa fa-fw"
            [ngClass]="{'fa-microphone-slash': muted, 'fa-microphone': !muted}"></i>
      </button>
    </div>`
    })
    .Class({

      constructor: function() {
        this.onClickCall = new ng.core.EventEmitter();
        this.onClickMute = new ng.core.EventEmitter();
      },
      
      clickCall: function() {
        this.onClickCall.emit();
      },

      clickMute: function() {
        this.onClickMute.emit();
      }

    });
})(window.app || (window.app = {}));
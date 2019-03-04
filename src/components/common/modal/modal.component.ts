import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';

@AutoUnsubscribe()
@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(){
    
  }

}
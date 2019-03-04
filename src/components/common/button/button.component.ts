import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label?: string;
  @Output() click?: EventEmitter<any> = new EventEmitter<any>();

  public onClick() {
    this.click.emit();
  }
}
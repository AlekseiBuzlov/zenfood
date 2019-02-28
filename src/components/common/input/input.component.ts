import { Component, Input } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label?: string;
}
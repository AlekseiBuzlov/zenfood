import { Component, Input } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
}
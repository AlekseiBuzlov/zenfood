import { Component } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@AutoUnsubscribe()
export class AppComponent {
  
}

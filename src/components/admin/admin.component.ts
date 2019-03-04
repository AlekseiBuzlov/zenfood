import { Component } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
}

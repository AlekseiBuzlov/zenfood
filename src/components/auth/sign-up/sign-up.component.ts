import { Component } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';


@AutoUnsubscribe()
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  title = 'my-angular-app';
}

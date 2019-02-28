import { NgModule } from '@angular/core';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [],
  providers: [],
  exports: [
    InputComponent,
    ButtonComponent,
    HeaderComponent
  ]
//   bootstrap: [InputComponent]
})
export class CommonModule { }

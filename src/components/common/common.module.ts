import { NgModule } from '@angular/core';
import { TableModule } from 'ngx-easy-table'; 
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxMenusModule } from '@ngx-lite/menus';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    TableModule,
    NgxMenusModule,
    NgxSmartModalModule.forChild()
  ],
  providers: [],
  exports: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    TableComponent,
    ModalComponent
  ]
//   bootstrap: [InputComponent]
})
export class CommonModule { }

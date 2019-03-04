import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@common/common.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

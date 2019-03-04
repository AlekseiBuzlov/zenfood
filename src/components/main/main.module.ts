import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@common/common.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NgxSmartModalModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }

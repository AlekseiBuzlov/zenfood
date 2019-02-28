import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@common/common.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }

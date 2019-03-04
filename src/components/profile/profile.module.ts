import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@common/common.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    ProfileRoutingModule,
    NgxSmartModalModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }

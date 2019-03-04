import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from '../notFound/notFound.component';

import { AuthModule } from '../auth/auth.module';
import { MainModule } from '../main/main.module';
import { ProfileModule } from '../profile/profile.module';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    AdminModule,
    ProfileModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

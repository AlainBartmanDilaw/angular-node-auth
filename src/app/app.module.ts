import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RequestResetComponent } from './components/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/response-reset/response-reset.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {  MainRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';


@NgModule({
  imports:      [ BrowserModule,  MainRoutingModule, FormsModule,HttpClientModule,
    ReactiveFormsModule],
  declarations:
   [
     AppComponent,
     SignupComponent,
     SigninComponent,
     RequestResetComponent,
     ResponseResetComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }

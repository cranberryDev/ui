import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AES } from 'crypto-js';
import { CheckoutPlansComponent } from './checkout-plans/checkout-plans.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    CheckoutPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    NgOtpInputModule,
    SocialLoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin:false,
      providers:[
        {id:GoogleLoginProvider.PROVIDER_ID,
          provider:new GoogleLoginProvider('722899445929-l7l7724fke9oe60nhfko8h37v0m3ommp.apps.googleusercontent.com')
        }
      ],
      onError:(err)=>{
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

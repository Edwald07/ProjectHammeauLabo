import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/auth/register/RegisterComponent';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfilComponent } from './components/auth/profil/profil.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavComponent } from './shared/nav/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './components/home/home.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { HouseComponent } from './components/house/house.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import { RulesComponent } from './components/rules/rules.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfilComponent,
    AuthComponent,
    NavComponent,
    HomeComponent,
    TchatComponent,
    HouseComponent,
    RulesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PasswordModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    StyleClassModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

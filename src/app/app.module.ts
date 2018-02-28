import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {AngularFireAuthModule} from "angularfire2/auth";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

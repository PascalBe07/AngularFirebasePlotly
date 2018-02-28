import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ChartsComponent } from './charts/charts.component';
import {LoginGuard} from "./login.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "charts", component: ChartsComponent, canActivate: [LoginGuard] },
  { path: "**", redirectTo: "/charts" }
];

@NgModule({
  declarations: [LoginComponent, ChartsComponent],
  imports: [
    RouterModule.forRoot(routes), FormsModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule
  ],
  providers: [LoginGuard],
  exports: [RouterModule, MatButtonModule, MatIconModule]
})
export class AppRoutingModule { }

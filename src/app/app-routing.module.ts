import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ChartsComponent } from './charts/charts.component';
import {LoginGuard} from "./login.guard";
import {AngularFireDatabaseModule} from "angularfire2/database";

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
    AngularFireAuthModule, AngularFireDatabaseModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatTabsModule
  ],
  providers: [LoginGuard],
  exports: [RouterModule, MatButtonModule, MatIconModule]
})
export class AppRoutingModule { }

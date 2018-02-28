import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public loginError: boolean = false;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }


  public async onLogin(form: NgForm): Promise<void> {
    this.loginError = false;
    if (form.valid){
      try {
        const result = await this.auth.auth.signInWithEmailAndPassword(form.value.email, form.value.password);
        await this.router.navigate(["/charts"]);

      } catch (e) {
        console.log(e);
        this.loginError = true;
      }
    }
  }
}

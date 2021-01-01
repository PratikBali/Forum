import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  userData = {};
  formdata = {
    username: '',
    password: ''
  };
  current_user = {};

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (sessionStorage['authDetails']) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  doLogin(): any {
    this.loginService.checkLogin(this.formdata).then(user => {
      console.log(user);
      this.isLoggedIn = true;
      sessionStorage['authDetails'] = JSON.stringify(user);
      this.router.navigate(['']);
    }).catch((error: any) => {
      this.isLoggedIn = false;
      console.error(error);
      alert('login error');
    });

    // console.log(this.formdata);
    // this.loginService.performLogin(this.formdata);
  }

}

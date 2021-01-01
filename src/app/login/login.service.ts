import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import SERVER_API from '../common/forum.const';

interface IUser {
  username: string;
  password: string;
  loggedStatus: string;
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  LoggedUsersList = [];
  current_user = {};
  loginService: any;
  username = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {  }

  checkLogin(formdata: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(SERVER_API.SERVER_URL + '/login.json').subscribe(users => {
        const filteredUsers = Object.values(users);
        const isValid = filteredUsers.find(eachUser => eachUser.username === formdata.username)
        if (isValid) {
          resolve(isValid);
        } else {
          reject(null);
        }
      }, error => reject(error));
    });
  }

  navigateLogin(): any {
    if ( this.router.url !== '/login') {
      this.router.navigate(['/login']);
    }
  }

}

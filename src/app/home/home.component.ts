import { Component, OnInit } from '@angular/core';
import Messages from '../common/locale/lang';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messages = Messages;
  userData = {};
  isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

}

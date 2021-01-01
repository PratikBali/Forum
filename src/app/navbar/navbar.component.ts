import { Component, OnInit } from '@angular/core';
import Messages from '../common/locale/lang';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  messages = Messages;
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
    if (sessionStorage['authDetails']) {
      this.isLoggedIn = true;
    }
  }

}

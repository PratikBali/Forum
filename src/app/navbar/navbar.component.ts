import { Component, OnInit } from '@angular/core';
import Messages from '../locale/lang';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  messages = Messages;

  constructor() { }

  ngOnInit(): void {
  }

}

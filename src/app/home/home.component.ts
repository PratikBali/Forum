import { Component, OnInit } from '@angular/core';
import Messages from '../locale/mr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messages = Messages;

  constructor() { }

  ngOnInit(): void {
  }

}

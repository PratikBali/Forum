import { Component } from '@angular/core';
import Messages from './common/locale/lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hydra-forum';

  messages = Messages;

}

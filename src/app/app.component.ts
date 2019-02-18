import { Component } from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {
  title = 'ff-img-overlay-app';

  leaveHandler(event) {
    console.log(event);
  }

  enterHandler(event) {
    console.log(event);
  }
}

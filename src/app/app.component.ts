import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;
  clicks = 0;
  logEntries = [];
  toggleShowContent() {
    this.showContent = !this.showContent;
    this.clicks++;
    this.logEntries.push('Button clicked ' + this.clicks + ' times. ' + new Date());
  }
}

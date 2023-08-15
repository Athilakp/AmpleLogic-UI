import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadingProgress: number = 0;
  show: boolean = false;
  buttonClicked: boolean = true;
  showAlert: boolean = false;
  startLoading() {
    this.show = true
    this.buttonClicked = false;
    const interval = setInterval(() => {
      this.loadingProgress += 10;
      if (this.loadingProgress >= 100) {
        clearInterval(interval);
        this.loadingComplete();
      }
    }, 500);
  }
  loadingComplete() {
    setTimeout(() => {
      this.showAlert = true;
      this.show = false;
    }, 500);
  }
  closeAlert() {
    this.showAlert = false;
  }
}











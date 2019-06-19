import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'hgb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  readonly MAXSTEPS = 5;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    if (this.step < this.MAXSTEPS - 1)
      this.step++;
  }

  prevStep() {
    if (this.step > 0)
      this.step--;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // console.log(event);
    if (event.ctrlKey && event.key == "ArrowLeft") {
      this.prevStep();
      event.preventDefault();
    }
    else if (event.ctrlKey && event.key == "ArrowRight") {
      this.nextStep();
      event.preventDefault();
    }
  }

}

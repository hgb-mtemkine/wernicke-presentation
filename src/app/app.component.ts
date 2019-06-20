import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'hgb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  step = 0;
  slides: SlideVM[] = [
    <SlideVM> {
      title: 'Sample email',
      doc: 'assets/md/slide1.md'
    },
    <SlideVM> {
      title: 'Atomic vs molecular',
      doc: 'assets/md/slide2.md'
    },
    <SlideVM> {
      title: 'Atomic entities',
      doc: 'assets/md/slide3.md'
    },
    <SlideVM> {
      title: 'Molecular entities',
      doc: 'assets/md/slide4.md'
    },
    <SlideVM> {
      title: 'Growing molecular entities',
      doc: 'assets/md/slide5.md'
    },
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    if (this.step < this.slides.length - 1)
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

//=====================================================================================================================================

export class SlideVM {
  title: string;
  doc: string;
}
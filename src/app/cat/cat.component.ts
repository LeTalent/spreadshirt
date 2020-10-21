import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  timeLeft;
  interval;
  images: Image[] = [];
  gesamtZahl = 0;
  positivBewertung = 0;
  negativBewertung = 0;
  uebersprungene = 0;
  disabled = true;
  el: HTMLElement;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(res => this.images = res);
    console.log(this.images);
  }
  getPositivBewertung() {
    this.gesamtZahl++;
    this.positivBewertung++;
    return this.imageService.getImages().subscribe(res => this.images = res);
  }
  getNegativBewertung() {
    this.gesamtZahl++;
    this.negativBewertung++;
    return this.imageService.getImages().subscribe(res => this.images = res);
  }
  getSkipedImage() {
    this.gesamtZahl++;
    this.uebersprungene++;
    return this.imageService.getImages().subscribe(res => this.images = res);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.disabled = false;
        this.scroll1();
        return this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.disabled = true;
        this.scroll2();
      }
    }, 1000);
  }
  scroll1() {
    document.querySelector('#target1')
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  scroll2() {
    document.querySelector('#target2')
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}

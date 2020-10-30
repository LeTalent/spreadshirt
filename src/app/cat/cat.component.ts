import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from '../image.model';
import { ImageService } from '../image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit, OnDestroy {
  timeLeft;
  interval;
  images: Image[] = [];
  gesamtZahl = 0;
  positivBewertung = 0;
  negativBewertung = 0;
  uebersprungene = 0;
  disabled = true;
  el: HTMLElement;
  imageSubs: Subscription;
  imageSubsP: Subscription;
  imageSubsN: Subscription;
  imageSubsS: Subscription;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageSubs = this.imageService.getImages().subscribe(res => this.images = res);
  }
  getPositivBewertung() {
    this.gesamtZahl++;
    this.positivBewertung++;
    this.imageSubsP = this.imageService.getImages().subscribe(res => this.images = res);
    return this.imageSubsP;
  }
  getNegativBewertung() {
    this.gesamtZahl++;
    this.negativBewertung++;
    this.imageSubsN = this.imageService.getImages().subscribe(res => this.images = res);
    return this.imageSubsN;
  }
  getSkipedImage() {
    this.gesamtZahl++;
    this.uebersprungene++;
    this.imageSubsS = this.imageService.getImages().subscribe(res => this.images = res);
    return this.imageSubsS;
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

  ngOnDestroy(){
    this.imageSubs.unsubscribe();
    this.imageSubsP.unsubscribe();
    this.imageSubsN.unsubscribe();
    this.imageSubsS.unsubscribe();
  }

}

import { SOCIAL_MEDIA } from './../../../constants/footer.contstants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  social_media = SOCIAL_MEDIA;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(e: any): void {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20);
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 3);
  }

}

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

}

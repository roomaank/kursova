import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  close = false;
  onPlay = false;

  constructor() {}

  ngOnInit(): void {
  }

  play(e: Event): void {
    this.onPlay = !this.onPlay;
    if (this.onPlay === true){
      this.close = !this.close
    }
  }

  isClosed(e: Event): void {
    this.close = !this.close
    if (this.close === false){
      this.onPlay = !this.onPlay;
    }
  }
}

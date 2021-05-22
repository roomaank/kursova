import { COURSE_ITEM } from './../../../models/ICouse-item';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'liked-courses',
  templateUrl: './liked-courses.component.html',
  styleUrls: ['./liked-courses.component.scss']
})
export class LikedCoursesComponent implements OnInit {

  likedCourses: COURSE_ITEM[];

  constructor() { 
    this.populateLikedCourses();
   }

  ngOnInit(): void {
    // console.log(JSON.parse(localStorage.getItem('likedCourses')));
  }

  populateLikedCourses(): void {
    this.likedCourses = JSON.parse(localStorage.getItem('likedCourses'));
    console.log(this.likedCourses);
    
  }

}

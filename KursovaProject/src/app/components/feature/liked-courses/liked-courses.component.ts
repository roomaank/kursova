import { COURSE_ITEM } from './../../../models/ICouse-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'liked-courses',
  templateUrl: './liked-courses.component.html',
  styleUrls: ['./liked-courses.component.scss']
})
export class LikedCoursesComponent implements OnInit {

  likedCourses: COURSE_ITEM[];

  constructor() { }

  ngOnInit(): void {
    
  }

  populateLikedCourses(): void {
    // this.likedCourses = localStorage.getItem('likedCourses')
  }

}

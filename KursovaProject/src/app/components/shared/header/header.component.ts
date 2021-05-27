import { LikedCoursesService } from './../../../services/liked-courses.service';
import { NAV_ITEMS } from './../../../constants/header.constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nav_items = NAV_ITEMS;
  likedCoursesCount: number;

  constructor(
    private router: Router,
    private likedCoursesService: LikedCoursesService
  ) {}

  ngOnInit(): void {
    this.getLikedCoursesLength();
    // this.getStorageLikedCoursesLength();
  }

  private getLikedCoursesLength(): void {
    this.likedCoursesService.likedCoursesLength$.subscribe(
      (coursesLength: number) => {
        this.likedCoursesCount = coursesLength;
      }
    );
  }

  private getStorageLikedCoursesLength(): void {
    const parsedCoursesArray = JSON.parse(localStorage.getItem('likedCourses'));
    this.likedCoursesCount = parsedCoursesArray?.length;
  }

  navigateTo(item: any): void {
    this.router.navigate([item.path]);
  }
}

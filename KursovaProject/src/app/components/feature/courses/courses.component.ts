import { ModalComponent } from './../../shared/modal/modal.component';
import { COURSES } from './../../../constants/courses.constants';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = COURSES;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  private scrollToTop(): void {
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

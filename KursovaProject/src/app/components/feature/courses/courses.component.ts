import { SingUpModalComponent } from '../../shared/sign-up-modal/sign-up-modal.component';
import { COURSES } from './../../../constants/courses.constants';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  fileNameDialogRef: MatDialogRef<SingUpModalComponent>
  courses = COURSES;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  openDialog(): void {
    this.dialog.open(SingUpModalComponent);
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

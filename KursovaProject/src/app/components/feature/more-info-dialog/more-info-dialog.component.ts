import { MoreInfoDialogHelperService } from './../../../services/more-info-dialog-helper.service';
import { COURSE_ITEM } from 'src/app/models/ICouse-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info-dialog',
  templateUrl: './more-info-dialog.component.html',
  styleUrls: ['./more-info-dialog.component.scss']
})
export class MoreInfoDialogComponent implements OnInit {

  selectedCourse: COURSE_ITEM;

  constructor(
    private moreInfoDialogHelper: MoreInfoDialogHelperService
  ) { }

  ngOnInit(): void {
    this.initCourseInfo();
  }

  private initCourseInfo(): void {
    this.selectedCourse = this.moreInfoDialogHelper.selectedCourse$.getValue();
  }

}

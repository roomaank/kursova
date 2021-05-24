import { COURSE_ITEM } from 'src/app/models/ICouse-item';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

const SELECTED_COURSE: COURSE_ITEM = {
  id: '',
  type: '',
  subType: '',
  days: '',
  price: ''
};
@Injectable({
  providedIn: 'root',
})
export class MoreInfoDialogHelperService {

  selectedCourse$: BehaviorSubject<COURSE_ITEM> = new BehaviorSubject(SELECTED_COURSE);

  constructor() {}
}

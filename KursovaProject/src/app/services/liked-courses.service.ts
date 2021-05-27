import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikedCoursesService {

  likedCoursesLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  likedCoursesArray$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }
}

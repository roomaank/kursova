import { Component, OnInit } from '@angular/core';
import { MentorCard } from '../../../../constants/mentorCard';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {

  card = MentorCard;

  constructor() { }

  ngOnInit(): void {
  }

}

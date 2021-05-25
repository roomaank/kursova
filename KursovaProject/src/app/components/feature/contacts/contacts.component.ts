import { CONTACTS_RIGHT } from './../../../constants/contacts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts_right = CONTACTS_RIGHT;
  role = true;
  experience = false;
  check1 = false;
  check2 = false;
  check3 = false;

  constructor() {}

  ngOnInit(): void {}

  isChangedCheck(e: Event): void {
    // @ts-ignore
    const value = e.target.value;
    this.role = !this.role;
  }

  isExperienceCheck(e: Event): void {
    // @ts-ignore
    const value = e.target.value;
    this.experience = !this.experience;
    console.log(this.experience);
  }

  onlyOne(e: Event): void {
    // @ts-ignore
    const id = e.target.id;
    if (id === 'check1') {
      this.check1 = true;
      this.check2 = false;
    } else if (id === 'check2') {
      this.check1 = false;
      this.check2 = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  role = true;

  ngOnInit(): void {
  }

  isChangedCheck(e: Event):void {
    // @ts-ignore
    const value = e.target.value;
    this.role = !this.role;
    console.log(this.role)
  }
}

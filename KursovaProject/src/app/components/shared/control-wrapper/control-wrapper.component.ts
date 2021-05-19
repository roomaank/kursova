import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss']
})
export class ControlWrapperComponent implements OnInit {

  @Input() label!: string
  @Input() asterisk!: boolean;
  @Input() labelIcon! : string;
  @Input() tooltipText!: any;

  constructor() { }

  ngOnInit(): void {
  }

}

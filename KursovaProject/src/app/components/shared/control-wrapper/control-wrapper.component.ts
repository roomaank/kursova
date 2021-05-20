import { ValidationErrors } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss'],
})
export class ControlWrapperComponent implements OnInit {
  @Input() label: string;
  @Input() asterisk: boolean;
  @Input() labelIcon: string;
  @Input() tooltipText: any;
  @Input() showError: boolean;
  @Input() fieldError: ValidationErrors;
  @Input() errorMappingKey: string;

  constructor() {}

  ngOnInit(): void {}
}

import { FormControl, ValidationErrors } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss'],
})
export class ControlWrapperComponent implements OnInit {
  @Input() label: string;
  @Input() asterisk: boolean;
  @Input() labelIcon: string;
  @Input() tooltipText: string;
  @Input() showError: boolean;
  @Input() fieldError: ValidationErrors;
  @Input() errorMappingKey: string;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);

  constructor() {}

  ngOnInit(): void {}
}

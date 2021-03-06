import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FieldErrors } from 'src/app/constants/error-mapping';

@Component({
  selector: 'error-content',
  templateUrl: './error-content.component.html',
  styleUrls: ['./error-content.component.scss']
})
export class ErrorContentComponent implements OnInit {

  @Input() show: boolean;
  @Input() errorMappingKey: string;
  @Input() set fieldErrors(errors: ValidationErrors) {
    this.defineErrorMessage(errors);
  }

  errorMessage: string;

  ngOnInit(): void {
  }

  private defineErrorMessage(errors: ValidationErrors): void {
    if (!errors) {
      return;
    }

    if (errors.hasOwnProperty('serverError')) {
      this.errorMessage = errors.serverError;

      return;
    }

    const fieldError = Object.keys(errors)[0];
    
    this.errorMessage = this.errorMappingKey
      ? FieldErrors[this.errorMappingKey][fieldError]
      : FieldErrors[fieldError];
  }

}

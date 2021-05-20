import { VALIDATION_PATTERNS } from './../constants/patterns';
import { VALIDATION_NAME_CONFIG } from './../constants/form.validation';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormCreatorService {
  constructor(private fb: FormBuilder) {}

  createSignUpCourseForm(): FormGroup {
    return this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(VALIDATION_NAME_CONFIG.nameMinLength),
          Validators.maxLength(VALIDATION_NAME_CONFIG.nameMaxLength),
          Validators.pattern(VALIDATION_PATTERNS.name),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(VALIDATION_NAME_CONFIG.nameMinLength),
          Validators.maxLength(VALIDATION_NAME_CONFIG.nameMaxLength),
          Validators.pattern(VALIDATION_PATTERNS.name),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern(VALIDATION_PATTERNS.phone)],
      ],
    });
  }
}

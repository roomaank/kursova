import { TOOLTIPS_TEXT } from './../../../constants/tooltips';
import { FormCreatorService } from './../../../services/form-creator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  signUpCourseForm : FormGroup;
  tooltipText = TOOLTIPS_TEXT.signUpForm;
  formIsSubmitted: boolean;

  constructor(private formCreatorService: FormCreatorService) {}

  ngOnInit(): void {
    this.initSignUpCourseForm();
  }

  private initSignUpCourseForm(): void {
    this.signUpCourseForm = this.formCreatorService.createSignUpCourseForm();
  }

  submitForm() {
    console.log(this.signUpCourseForm.value);
  }

  showError(fieldName: string): boolean {
    const field = this.signUpCourseForm.get(fieldName);

    return field.touched && field.invalid;
  }

  getError(fieldName: string): ValidationErrors {
    return this.signUpCourseForm.get(fieldName).errors;
  }


}

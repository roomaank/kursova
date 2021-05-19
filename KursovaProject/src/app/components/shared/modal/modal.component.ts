import { TOOLTIPS_TEXT } from './../../../constants/tooltips';
import { FormCreatorService } from './../../../services/form-creator.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  signUpCourseForm!: FormGroup;
  tooltipText = TOOLTIPS_TEXT.signUpForm;
  formIsSubmitted!: boolean;

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

  // showErrors(field: AbstractControl): boolean {
  //   return field.invalid && (field.touched || this.formIsSubmitted);
  // }
}

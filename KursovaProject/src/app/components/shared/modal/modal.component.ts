import { TOOLTIPS_TEXT } from './../../../constants/tooltips';
import { FormCreatorService } from './../../../services/form-creator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  signUpCourseForm: FormGroup;
  tooltipText = TOOLTIPS_TEXT.signUpForm;
  formIsSubmitted: boolean;

  constructor(
    private formCreatorService: FormCreatorService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initSignUpCourseForm();
  }

  ngOnDestroy(): void {
    // if (this.formIsSubmitted && this.signUpCourseForm.valid) {
    //   this.toastr.success('Test');
    // }
      this.toastr.success('Test');
  }

  private initSignUpCourseForm(): void {
    this.signUpCourseForm = this.formCreatorService.createSignUpCourseForm();
  }

  submitForm() {
    this.formIsSubmitted = true;
  }

  showError(fieldName: string): boolean {
    const field = this.signUpCourseForm.get(fieldName);

    return (field.touched || this.formIsSubmitted) && field.invalid;
  }

  getError(fieldName: string): ValidationErrors {
    return this.signUpCourseForm.get(fieldName).errors;
  }
}

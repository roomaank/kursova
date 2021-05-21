import { MatDialogRef } from '@angular/material/dialog';
import { TOOLTIPS_TEXT } from './../../../constants/tooltips';
import { FormCreatorService } from './../../../services/form-creator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-singUpModal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class SingUpModalComponent implements OnInit {
  signUpCourseForm: FormGroup;
  tooltipText = TOOLTIPS_TEXT.signUpForm;
  formIsSubmitted: boolean;

  constructor(
    private formCreatorService: FormCreatorService,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<SingUpModalComponent>
  ) {}

  ngOnInit(): void {
    this.initSignUpCourseForm();
  }

  ngOnDestroy(): void {
    if (this.signUpCourseForm.valid) {
      this.toastr.success('Send');
      this.signUpCourseForm.reset();
    } else {
      this.toastr.error('You have not filled out the form');
      this.signUpCourseForm.reset();
    }
  }

  get firstName() {
    return this.signUpCourseForm.get('firstName');
  }

  private initSignUpCourseForm(): void {
    this.signUpCourseForm = this.formCreatorService.createSignUpCourseForm();
  }

  submitForm() {
    this.formIsSubmitted = true;
    if (this.signUpCourseForm.valid) {
      this.dialogRef.close();
    }
    this.signUpCourseForm.reset();
  }

  showError(fieldName: string): boolean {
    const field = this.signUpCourseForm.get(fieldName);

    return (field.touched || this.formIsSubmitted) && field.invalid;
  }

  getError(fieldName: string): ValidationErrors {
    return this.signUpCourseForm.get(fieldName).errors;
  }
}

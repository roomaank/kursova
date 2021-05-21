import { MatDialogRef } from '@angular/material/dialog';
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
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {
    this.initSignUpCourseForm();
  }

  ngOnDestroy(): void {
    if (this.signUpCourseForm.valid) {
      this.toastr.success('Send');
    } else {
      this.toastr.error('You have not filled out the form');
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
  }

  showError(fieldName: string): boolean {
    const field = this.signUpCourseForm.get(fieldName);

    return (field.touched || this.formIsSubmitted) && field.invalid;
  }

  getError(fieldName: string): ValidationErrors {
    return this.signUpCourseForm.get(fieldName).errors;
  }
}

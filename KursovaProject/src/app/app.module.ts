import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/feature/about-us/about-us.component';
import { CoursesComponent } from './components/feature/courses/courses.component';
import { ReviewsComponent } from './components/feature/reviews/reviews.component';
import { ContactsComponent } from './components/feature/contacts/contacts.component';
import { signUpModalComponent } from './components/shared/sign-up-modal/sign-up-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ControlWrapperComponent } from './components/shared/control-wrapper/control-wrapper.component';
import { ErrorContentComponent } from './components/shared/error-content/error-content.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgxMaskModule } from 'ngx-mask';
import { MatMenuModule } from '@angular/material/menu';
import { LikedCoursesComponent } from './components/feature/liked-courses/liked-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    CoursesComponent,
    ReviewsComponent,
    ContactsComponent,
    signUpModalComponent,
    ControlWrapperComponent,
    ErrorContentComponent,
    LikedCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
    }),
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [signUpModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}

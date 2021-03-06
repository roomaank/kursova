import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutUsComponent} from './components/feature/about-us/about-us.component';
import {CoursesComponent} from './components/feature/courses/courses.component';
import {ReviewsComponent} from './components/feature/reviews/reviews.component';
import {ContactsComponent} from './components/feature/contacts/contacts.component';
import {signUpModalComponent} from './components/shared/sign-up-modal/sign-up-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ControlWrapperComponent} from './components/shared/control-wrapper/control-wrapper.component';
import {ErrorContentComponent} from './components/shared/error-content/error-content.component';
import {NgxMaskModule} from 'ngx-mask';
import {MatMenuModule} from '@angular/material/menu';
import {LikedCoursesComponent} from './components/feature/liked-courses/liked-courses.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CircleComponent } from './components/feature/reviews/circle/circle.component';
import { MentorsComponent } from './components/feature/reviews/mentors/mentors.component';


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
    CircleComponent,
    MentorsComponent,
  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
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
export class AppModule {
}

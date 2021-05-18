import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/feature/about-us/about-us.component';
import { CoursesComponent } from './components/feature/courses/courses.component';
import { ReviewsComponent } from './components/feature/reviews/reviews.component';
import { ContactsComponent } from './components/feature/contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, AboutUsComponent, CoursesComponent, ReviewsComponent, ContactsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

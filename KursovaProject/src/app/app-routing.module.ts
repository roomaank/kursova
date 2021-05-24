import { ContactsComponent } from './components/feature/contacts/contacts.component';
import { ReviewsComponent } from './components/feature/reviews/reviews.component';
import { CoursesComponent } from './components/feature/courses/courses.component';
import { AboutUsComponent } from './components/feature/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about_us',
    component: AboutUsComponent,
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

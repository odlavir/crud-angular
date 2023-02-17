import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseResolver } from './../courses/guards/course.resolver';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CoursesComponent } from './containers/courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFormComponent },
  {
    path: 'edit/:id',
    component: CourseFormComponent,
    resolve: { course: CourseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}

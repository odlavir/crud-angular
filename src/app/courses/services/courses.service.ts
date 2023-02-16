import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  // private readonly API = '/assets/courses.json';

  constructor(private httpCLient: HttpClient) {}

  list() {
    return this.httpCLient.get<Course[]>(this.API).pipe(
      first(),
      // delay(2000),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Partial<Course>) {
    return this.httpCLient.post<Course[]>(this.API, record).pipe(first());
  }
}

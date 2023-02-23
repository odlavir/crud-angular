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
      first()
      // delay(2000),
      // tap((courses) => console.log(courses))
    );
  }

  loadById(id: string) {
    return this.httpCLient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>) {
    if (record._id) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Course>) {
    return this.httpCLient.post<Course[]>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpCLient
      .put<Course[]>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  getCourses(): Array<string> {
    return ['angular', 'spring', 'typescript'];
  }
}

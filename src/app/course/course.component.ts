import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CourseService } from './../course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
  title: string = 'Hello Angular';
  courses: Array<string> = [];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit(): void {}
}

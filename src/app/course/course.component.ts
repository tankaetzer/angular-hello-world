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
  imageUrl: string = 'https://picsum.photos/250?image=9';

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit(): void {}
}

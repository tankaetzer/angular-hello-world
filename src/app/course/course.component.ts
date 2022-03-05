import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  title: string = 'Hello Angular';
  courses: Array<string> = ['angular', 'spring', 'typescript'];

  constructor() { }

  ngOnInit(): void {
  }

}

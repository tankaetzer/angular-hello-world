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

  onSave($event: { stopPropagation: () => void }) {
    $event.stopPropagation();
    console.log('Button was clicked');
  }

  onDivClick() {
    console.log('Div was clicked');
  }

  onEnter() {
    alert('enter');
  }
}

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
  email: string = 'tankaetzer@gmail.com';
  text: string =
    'As they rounded a bend in the path that ran beside the river, Lara recognized the silhouette of a fig tree atop a nearby hill. The weather was hot and the days were long. The fig tree was in full leaf, but not yet bearing fruit. Soon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised. They were drawing near to the place where there was an island in the river. The island was a good spot to make camp. They would sleep on the island tonight.';

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9,
    students: 30123,
    price: 190.95,
    releaeseDate: new Date(2016, 3, 1),
  };

  viewMode: string = 'zzzz';

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
    alert(this.email);
  }
}

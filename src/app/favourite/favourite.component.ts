import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite: boolean = true;
  @Output() change = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('isFavourite', this.isFavourite);
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit();
  }
}

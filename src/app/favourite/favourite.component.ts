import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log("isFavourite", this.isFavourite);
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}

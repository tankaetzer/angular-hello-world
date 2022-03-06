import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-world';

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs): void {
    console.log('on favourite changed', eventArgs);
  }
}

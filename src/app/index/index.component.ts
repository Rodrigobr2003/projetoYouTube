import { Component } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  options = faEllipsisVertical;

  navBarTop = [
    'Rock',
    'Pop',
    'Jazz',
    'Sci-Fi',
    'Action',
    'Thriller',
    'Horror',
    'RPG',
    'Adventure',
    'Indie Games',
    'Classical Music',
    'Fiction Movies',
    'Strategy',
    'Soundtracks',
    'Reggae',
    'Documentaries',
    'Puzzle Games',
    'K-Pop',
    'Superheroes',
  ];

  videos = [1, 2, 3, 4, 5, 6];
}

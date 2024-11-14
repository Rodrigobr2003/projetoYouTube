import { Component, inject } from '@angular/core';
import {
  faEllipsisVertical,
  faAngleLeft,
  faAngleRight,
  faPlay,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  options = faEllipsisVertical;
  leftBtn = faAngleLeft;
  rightBtn = faAngleRight;
  shorts = faPlay;
  close = faXmark;

  pressed = false;
  startX = 0;

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

  shortsArr = [1, 2, 3, 4, 5];

  scrollLeft() {
    const caroseul = document.querySelector('.caroseul');

    caroseul.scrollBy({
      left: -400,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const caroseul = document.querySelector('.caroseul');

    caroseul.scrollBy({
      left: 400,
      behavior: 'smooth',
    });
  }
}

import {
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
export class IndexComponent implements OnInit {
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

  renderer = inject(Renderer2);

  ngOnInit(): void {
    const searchBar = document.querySelector('app-barra-pesquisa');
    const sideBar = document.querySelector('app-barra-lateral');
    const section = document.querySelector('section');

    this.renderer.setStyle(
      sideBar,
      'margin-top',
      `${searchBar.clientHeight}px`
    );

    this.renderer.setStyle(
      section,
      'margin-top',
      `${searchBar.clientHeight}px`
    );
  }

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

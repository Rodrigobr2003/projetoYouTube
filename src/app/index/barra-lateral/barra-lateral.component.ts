import { Component } from '@angular/core';
import {
  faHouse,
  faPlay,
  faDisplay,
  faClockRotateLeft,
  faBarsStaggered,
  faVideo,
  faClock,
  faThumbsUp,
  faFire,
  faShoppingBag,
  faMusic,
  faClapperboard,
  faTowerBroadcast,
  faGamepad,
  faNewspaper,
  faTrophy,
  faLightbulb,
  faPodcast,
  faGear,
  faFlag,
  faCircleQuestion,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css',
})
export class BarraLateralComponent {
  house = faHouse;
  play = faPlay;
  display = faDisplay;
  clockRotateLeft = faClockRotateLeft;
  barsStaggered = faBarsStaggered;
  video = faVideo;
  clock = faClock;
  thumbsUp = faThumbsUp;
  fire = faFire;
  shoppingBag = faShoppingBag;
  music = faMusic;
  clapperboard = faClapperboard;
  towerBroadcast = faTowerBroadcast;
  gamepad = faGamepad;
  newspaper = faNewspaper;
  trophy = faTrophy;
  lightbulb = faLightbulb;
  podcast = faPodcast;
  gear = faGear;
  flag = faFlag;
  circleQuestion = faCircleQuestion;
  exclamation = faExclamation;
}

import { Component } from '@angular/core';
import {
  faAngleDown,
  faBars,
  faEllipsis,
  faEllipsisVertical,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagina-video',
  templateUrl: './pagina-video.component.html',
  styleUrl: './pagina-video.component.css',
})
export class PaginaVideoComponent {
  thumbsUp = faThumbsUp;
  thumbsDown = faThumbsDown;
  share = faShare;
  option = faEllipsisVertical;
  bars = faBars;
  angleDown = faAngleDown;
}

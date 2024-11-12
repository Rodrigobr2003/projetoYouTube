import { Component } from '@angular/core';
import {
  faBars,
  faBell,
  faCamera,
  faMagnifyingGlass,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css',
})
export class BarraPesquisaComponent {
  bars = faBars;
  microphone = faMicrophone;
  camera = faCamera;
  bell = faBell;
  search = faMagnifyingGlass;
}

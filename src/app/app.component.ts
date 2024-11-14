import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'projetoYouTube';

  document = inject(DOCUMENT);
  renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    const searchBar = this.document.querySelector('app-barra-pesquisa');
    const sideBar = this.document.querySelector('app-barra-lateral');
    const section = this.document.querySelector('section');

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
}

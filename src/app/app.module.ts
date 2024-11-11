import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BarraLateralComponent } from './index/barra-lateral/barra-lateral.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { PaginaVideoComponent } from './pagina-video/pagina-video.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BarraLateralComponent,
    BarraPesquisaComponent,
    PaginaVideoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

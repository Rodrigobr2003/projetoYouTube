import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PaginaVideoComponent } from './pagina-video/pagina-video.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'video', component: PaginaVideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

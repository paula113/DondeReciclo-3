import { NgModule} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  {
    path: 'intro',
    loadChildren: () => import('./pages/tabsnav/tabsnav.module').then( m => m.TabsnavPageModule)
  },
  {
    path: 'marcas',
    loadChildren: () => import('./pages/marcas/marcas.module').then( m => m.MarcasPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./pages/novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
  {
    path: 'modal-search',
    loadChildren: () => import('./pages/modal-search/modal-search.module').then( m => m.ModalSearchPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules},

      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

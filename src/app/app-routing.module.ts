import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // canLoad: [AuthenticationGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'city',
    // canLoad: [AuthenticationGuard],
    // runGuardsAndResolvers: 'always',
    loadChildren: './components/city/city.module#CityModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

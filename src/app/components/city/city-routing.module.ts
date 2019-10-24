import { RouterModule, Routes } from '@angular/router';

import { CityComponent } from './city.component';

const cityRoutes: Routes = [
  {
    path: '**',
    component: CityComponent,
  },
];

export const CityRoutingModule = RouterModule.forChild(cityRoutes);

import { RouterModule, Routes } from '@angular/router';
import { CitiesResolver } from '@shared/resolvers/cities.resolver';
import { CountriesResolver } from '@shared/resolvers/countries.resolver';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      cities: CitiesResolver,
      countries: CountriesResolver
    }
  }
];

export const HomeRoutingModule = RouterModule.forChild(homeRoutes);

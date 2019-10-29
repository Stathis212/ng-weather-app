import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ErrorModule } from '@components/error/error.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorService } from '@services/error.service';
import { HttpService } from '@services/http.service';
import { LoaderService } from '@services/loader.service';
import { CitiesService } from '@shared/services/cities.service';
import { CountriesService } from '@shared/services/countries.service';

import { LoaderModule } from './components/loader/loader.module';
import { Configuration } from './config';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import * as fromCore from './store';

@NgModule({
  imports: [
    LoaderModule,
    ErrorModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature('core', fromCore.reducer),
    EffectsModule.forFeature(fromCore.effects)
  ],
  exports: [
    LoaderModule,
    ErrorModule
  ],
  declarations: [],
  providers: [
    Configuration,
    HttpService,
    ErrorService,
    CitiesService,
    CountriesService,
    LoaderService,
    [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
  ],
})
export class CoreModule {

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Should be imported in AppModule only.');
    }
  }

}

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [],
  providers: []
})
export class ErrorModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as shared from './';

@NgModule({
  declarations: [
    shared.COMPONENTS,
    shared.PIPES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    shared.MODULES,
    shared.MATERIAL,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    shared.MODULES,
    shared.MATERIAL,
    shared.PIPES,
    shared.COMPONENTS
  ],
  providers: [
    shared.SERVICES,
    shared.MAPPERS
  ]
})
export class SharedModule {}

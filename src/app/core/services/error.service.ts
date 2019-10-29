import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ErrorService {

   public hasError = new BehaviorSubject(false);
   public error = new BehaviorSubject(null);
   constructor() {}
}

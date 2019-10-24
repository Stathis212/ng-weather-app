import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {

   public isLoaderVisible = new BehaviorSubject(false);
   constructor() {}
}

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '@services/loader.service';

import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'wa-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  public isLoaderVisible = false;

  private _loaderSubscription = new Subscription();

  constructor(
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {

    this._loaderSubscription = this.loaderService.isLoaderVisible
      .pipe(distinctUntilChanged()).subscribe(loaderStatus => {
        this.isLoaderVisible = loaderStatus;
        this.cdr.detectChanges();
      });
  }

  public ngOnDestroy(): void {

    this._loaderSubscription.unsubscribe();
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wa-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {

  @Input() public error: any;

  constructor( private router: Router ) {}


}

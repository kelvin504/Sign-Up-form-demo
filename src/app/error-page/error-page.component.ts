import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent implements OnInit {
  errorText = 'Oeps something went wrong please try again later.';
  constructor() { }

  ngOnInit(): void {
  }

}

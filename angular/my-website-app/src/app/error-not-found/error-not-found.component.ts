import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.less']
})
export class ErrorNotFoundComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToComponent() {
    this.router.navigate(['/home']);
  }

}

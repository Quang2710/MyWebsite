import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToMenuComponent() {
    this.router.navigate(['/home']);
  }
  navigateToMasterComponent() {
    this.router.navigate(['/master']);
  }
}

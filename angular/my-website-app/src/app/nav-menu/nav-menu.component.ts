import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isComponentAVisible: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.url.subscribe(url => {
    //   const currentUrl = url.map(segment => segment.path).join('/');
    //   // Kiểm tra xem đường dẫn hiện tại có chứa '/component-a' không
    //   if (currentUrl.includes('/home')) {
    //     this.isComponentAVisible = true;
    //     var x = document.querySelector('menu')
    //     x?.classList.add('active')
    //   } else {
    //     this.isComponentAVisible = false;
    //   }
    // });
  }

}

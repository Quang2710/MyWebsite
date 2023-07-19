import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fotter-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FotterComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],

})

export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  username: string = "";
  password: string = "";

  onInputChange() {
    // if (this.username === 'admin' && this.password === 'admin') {
    //   console.log('Login success!');
    // }
  }

  onLogin() {
    // if (this.username === 'admin' && this.password === 'admin') {
    //   this.router.navigate(['/home']);
    // }
  }
  navigateToComponent() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    const container = document.querySelectorAll<HTMLElement>('container')[0];
    container.classList.add("showBody")

  }
  ngAfterViewInit() {
    setInterval(() => {
      this.showNextSlide();
    }, 3000);
  }
  showLogin = true;
  currentSlideIndex = 0;
  images = ['car1.png','car4.png','car2.png','car3.png'];


  showNextSlide() {
    const divLogin = document.querySelectorAll('.img-oto');
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    for (let i = 0; i < divLogin.length; i++) {
      divLogin[i].classList.add('init');
    }
  }
  showPrevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }

  toggleElement(element: any, show: boolean) {
    if (show) {
      element.classList.remove("hidden");
      element.classList.add("show");
    } else {
      element.classList.remove("show");
      element.classList.add("hidden");
    }
  }

  handleRegisterClick() {
    const divLogin = document.querySelector<HTMLElement>('.form-input-login');
    const divRegister = document.querySelector<HTMLElement>('.form-input-register');

    this.toggleElement(divRegister, true);
    this.toggleElement(divLogin, false);
    this.showLogin = false;
  }

  handleLoginClick() {
    const divLogin = document.querySelector<HTMLElement>('.form-input-login');
    const divRegister = document.querySelector<HTMLElement>('.form-input-register');

    this.toggleElement(divLogin, true);
    this.toggleElement(divRegister, false);
    this.showLogin = true;
  }


}

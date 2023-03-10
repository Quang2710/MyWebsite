import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {
    const container = document.querySelectorAll<HTMLElement>('container')[0];
    container.classList.add("showBody")
  }
  showLogin = true;

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

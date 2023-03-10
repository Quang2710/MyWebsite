import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  ngOnInit() {
    this.actionLoginRegister();
    //this.loadFormInDelivery();
  }
  actionLoginRegister() {
    const div_login = document.querySelectorAll<HTMLElement>('.form-input-login');
    const div_register = document.querySelectorAll<HTMLElement>('.form-input-register');
    const btn_register = document.querySelectorAll<HTMLElement>('.btn_register');
    const btn_login = document.querySelectorAll<HTMLElement>('.btn_login');

    btn_register[0].addEventListener('click', () => {
      div_login[0].classList.remove("show")
      div_login[0].classList.add("hidden")
      div_register[0].classList.remove("hidden")
      div_register[0].classList.add("show")


    });
    btn_login[0].addEventListener('click', () => {
      div_register[0].classList.remove("show")
      div_register[0].classList.add("hidden")
      div_login[0].classList.remove("hidden")
      div_login[0].classList.add("show")

    });
  }
}

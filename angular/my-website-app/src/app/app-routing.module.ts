import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'app',
        component: AppComponent,
        children: [
            {
               path: 'login', component: LoginComponent,

            },
            {
                path: '**', redirectTo: 'notifications'
            }
        ]
    }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialExampleModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { MasterComponent } from './master/master.component';
import { FotterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavMenuComponent,
    ErrorNotFoundComponent,
    MasterComponent,
    FotterComponent
   ],
  imports: [
    MatNativeDateModule,
    MaterialExampleModule,
    FormsModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

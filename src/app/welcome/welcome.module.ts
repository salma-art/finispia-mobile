import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome.component';
import { StartComponent } from './start/start.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      {
        path: '', component: StartComponent
      },
      {
        path: 'login', component: LoginComponent
      }
    ]
  }

];

@NgModule({
  declarations: [WelcomeComponent, LoginComponent, StartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatToolbarModule, MatCardModule,MatButtonModule, MatDividerModule],
  exports: [RouterModule]
})
export class WelcomeModule { }

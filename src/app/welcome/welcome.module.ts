import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  }

];

@NgModule({
  declarations: [WelcomeComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeModule { }

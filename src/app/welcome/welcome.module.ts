import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome.component';
import { StartComponent } from './start/start.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { SubscriptionComponent } from './subscription/subscription.component';
import { signUpComponent, DialogsignComponent} from './signup/signUp.component';



const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      {
        path: '', component: StartComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'signup', component: signUpComponent
      }
    ]
  }

];


@NgModule({
  declarations: [WelcomeComponent, LoginComponent, StartComponent, SubscriptionComponent, signUpComponent,DialogsignComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatToolbarModule, MatCardModule,MatButtonModule, MatDividerModule,MatDialogModule],
  exports: [RouterModule],
  entryComponents: [signUpComponent,DialogsignComponent]
})

export class WelcomeModule { }

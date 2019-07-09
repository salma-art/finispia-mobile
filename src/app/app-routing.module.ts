import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EntryComponent } from './entry/entry.component';


const routes: Routes = [{
  path: '', loadChildren: () => import(`./welcome/welcome.module`).then(m => m.WelcomeModule)
},
{
  path: 'entry', loadChildren: () => import(`./entry/entry.module`).then(m => m.EntryModule)
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

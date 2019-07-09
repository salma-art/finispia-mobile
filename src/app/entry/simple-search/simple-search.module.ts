import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSearchComponent } from './simple-search.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: SimpleSearchComponent
  }

];

@NgModule({
  declarations: [SimpleSearchComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleSearchModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: AdvancedSearchComponent
  }

];

@NgModule({
  declarations: [AdvancedSearchComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedSearchModule { }

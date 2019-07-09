import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { Routes, RouterModule } from '@angular/router';
import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';



const routes: Routes = [
  {
    path: '', component: EntryComponent, children:[
      {
        path: 'search',  
        loadChildren: () => import("./simple-search/simple-search.module").then(m => m.SimpleSearchModule)
      },
      {
        path: 'advanced',
        loadChildren: () => import("./advanced-search/advanced-search.module").then(m => m.AdvancedSearchModule)
      }
    ]  
  }

];

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitlepageComponent } from './titlepage/titlepage.component';

const routes: Routes = [
  { path: 'title', component: TitlepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


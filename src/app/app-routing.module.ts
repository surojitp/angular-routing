//import { IndexComponent } from './index/index.component';
//import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { NoPageComponent } from './no-page/no-page.component';

// const routes: Routes = [
//   {path:'', component: HomeComponent},
//   {path: 'index', component: IndexComponent},
//   {path: '**', component: NoPageComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

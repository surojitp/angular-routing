import { AuthGuard } from './../gurds/auth.guard';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import {Route} from '@angular/router';

export const HomeRoutes:Route[] = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children:[
      {path: '',component: DashboardComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'products', component: ProductsComponent}
    ]
  }
]
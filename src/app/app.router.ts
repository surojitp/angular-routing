import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.router';
import { IndexRoute } from './index/index.router';
import { NoPageRoutes } from './no-page/no-page.routes';

export const AppRoute: Routes = [...HomeRoutes, ...IndexRoute, ...NoPageRoutes];
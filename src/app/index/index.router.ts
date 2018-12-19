import { LoginGuard } from './../gurds/login.guard';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index.component';
import {Route} from '@angular/router';

export const IndexRoute:Route[] =[
  {
    path: '',
    component: IndexComponent,
    canActivate: [LoginGuard],
    children: [
      {path: 'login',component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'forgot', component: ForgotComponent}
    ]
  }
]
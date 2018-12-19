import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public postData = {
    'email': 'abc@mail.com',
    'password': ''
  }

  errorText: string;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  loginAction(){
    //console.log(this.postData);
    if(this.postData.email && this.postData.password){
      this.errorText=''
      //API action and session storage
      if(this.authService.login(this.postData)){
        this.router.navigate([''])
      }
    }
    else{
      this.errorText = 'Please Give Valid Data';
    }
    
  }

}

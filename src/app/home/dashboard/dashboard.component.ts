import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userInformation: object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserData()
                    .then((data) =>{
                      console.log(data);
                      
                      this.userInformation = data
                    })
  }


}

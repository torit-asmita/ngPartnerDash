import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authServiceService:AuthServiceService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authServiceService.logout();
  }

}

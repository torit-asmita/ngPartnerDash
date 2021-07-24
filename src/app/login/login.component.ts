import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:String="";
  constructor(private authService:AuthServiceService , private routes: Router) { }

  ngOnInit() {
  }
  check(uname: string, p : string)
  {
    var output = this.authService.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
this.msg ='Invalid username or password';
    }
  }

}

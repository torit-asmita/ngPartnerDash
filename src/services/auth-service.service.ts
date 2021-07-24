import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }
  checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "admin" && pwd =="admin123"){
localStorage.setItem('username',"admin");
return true;
}
else{
  this.router.navigateByUrl('/login');
  return false;
}

  }

  logout(){
    localStorage.removeItem('username');
    this.router.navigateByUrl('/login');
  }
}

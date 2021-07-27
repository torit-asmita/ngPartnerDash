import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  msg:String="";
  
  constructor(private authService:AuthServiceService , private router: Router,private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.registerForm = this.formBuilder.group({
        email_mobile: ['',Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
        password: ['', Validators.required]
    });
      if (this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }
     }

     ngOnInit() {
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    localStorage.setItem('email_mobile',this.f.email_mobile.value);
    localStorage.setItem('password',this.f.password.value);
    this.loading = false;

}
reset_password()
{
  localStorage.setItem('email_mobile',this.f.email_mobile.value);
  localStorage.setItem('password',this.f.password.value);
}


}

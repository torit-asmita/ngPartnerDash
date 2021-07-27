import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  msg:String="";
  toShowRegisterPage = false;
  constructor(private authService:AuthServiceService , private router: Router,private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.loginForm = this.formBuilder.group({
        email_mobile: ['',Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
        password: ['', Validators.required]
    });
      if (this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }
     }

     ngOnInit() {
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.f.email_mobile.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from route parameters or default to '/'
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigate(['dashboard']);
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });
}



}

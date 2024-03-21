import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: login = { Email: '', Password: '' };
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  order: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.order = this.router.getCurrentNavigation()?.extras.state;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }


  onSubmit() {
    if (this.loginForm.valid) {
      this.model.Email = this.loginForm.get('admin@gmail.com')?.value;
      this.model.Password = this.loginForm.get('admin123')?.value;
      alert("Login Successful!");

      this.router.navigate(['/']);

    }
    else {
      alert("Login Failed!");
    }


  }

  // onLogin() {

  //   this.model.Email = this.loginForm.get('admin@gmail.com')?.value
  //   this.model.Password = this.loginForm.get('admin123')?.value
  //     .subscribe({
  //       next: (data: any) => {


  //         console.log(this.loginForm);
  //         alert('login success!');
  //         this.router.navigate(['/']);
  //       }, error: () => {

  //         alert('login failed');
  //       }
  //     })

  // }
}

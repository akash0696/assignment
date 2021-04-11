import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = '';
  loading = false;
  form: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
  });
  }

  ngOnInit(): void {
  }

  loginUser(): void{
    this.loading = true;
    if (this.form.valid) {
      this.auth.loginUser(this.form.value).subscribe(result => {
        if (result.is_success === true){
          console.log(result);
          this.router.navigate(['/movies']);
          // alert(result.is_success);
        }
      },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
          console.log(error);
        }
      );
    }
  }

}

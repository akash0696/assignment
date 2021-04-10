import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
  });
  }

  ngOnInit(): void {

  }

  loginUser(): void{
    if (this.form.valid) {
      this.auth.loginUser(this.form.value).subscribe(result => {
        if (result.is_success){
          console.log(result);
          // alert(result.is_success);
        }
        // else{
        //   alert(result.error.message);
        //   console.log(result);
        // }
      });
    }
  }

}

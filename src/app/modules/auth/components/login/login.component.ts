import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../dto/login.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuider.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .login(this.loginForm.value as LoginDto)
      .subscribe((value) => {
        console.log(value);
      });
  }
}

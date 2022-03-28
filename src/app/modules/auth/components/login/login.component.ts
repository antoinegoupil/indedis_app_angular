import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../dto/login.dto';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {}

  initForm(): FormGroup {
    return this.formBuider.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as LoginDto).subscribe({
        next: (value) => {
          this.toastr.success('Bonjour !');
          this.router.navigate(['']);
        },
        error: (err) =>
          this.toastr.error('Identifiant ou mot de passe incorrect !'),
      });
    } else {
      this.toastr.error('Champs incorrect');
    }
  }
}

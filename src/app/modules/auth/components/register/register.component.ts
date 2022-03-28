import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from '../../dto/register.dto';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registerForm = this.initForm();
  }

  ngOnInit(): void {}

  initForm(): FormGroup {
    return this.formBuider.group(
      {
        name: [null, Validators.required],
        firstname: [null, Validators.required],
        email: [null, Validators.required],
        password: [null, Validators.required],
        passwordConf: [null, Validators.required],
      },
      { validators: this.checkPasswords }
    );
  }

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('passwordConf')?.value;
    return pass === confirmPass ? null : { notSame: true };
  };

  onSubmit() {
    if (this.registerForm.valid) {
      delete this.registerForm.value['passwordConf'];
      const value = this.registerForm.value as RegisterDto;

      this.authService.register(value).subscribe({
        next: () => {
          this.toastr.success('Inscription effectué');
          this.router.navigate(['auth', 'login']);
        },
        error: (err) => this.toastr.error('Une erreur est survenue'),
      });
    } else {
      this.toastr.error('Champs incorrect');
    }
  }
}

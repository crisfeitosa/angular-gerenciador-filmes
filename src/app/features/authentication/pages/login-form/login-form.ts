import { Component, computed, inject, signal } from '@angular/core';
import { email, form, minLength, required, Field } from '@angular/forms/signals';
import { UserApi } from '../../../../core/services/user-api';
import { Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { ILoginParams } from '../../models/login-params';
import { setErrorMessage } from '../../../../shared/utils/set-error-message';

@Component({
  selector: 'app-login-form',
  imports: [Field],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css'],
})
export class LoginForm {
  private readonly _userApi = inject(UserApi);
  private readonly _router = inject(Router);

  loginErrorMessage = signal<string>('');

  loginModel = signal<ILoginParams>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'O E-mail é obrigatório.' });
    email(fieldPath.email, { message: 'O E-mail está inválido.' });

    required(fieldPath.password, { message: 'A senha é obrigatória.' });
    minLength(fieldPath.password, 3, { message: 'A senha deve ter no mínimo 8 caracteres.' });
  });

  loginParams = signal<ILoginParams | undefined>(undefined);

  loginResource = rxResource({
    params: () => this.loginParams(),
    stream: ({ params }) =>
      this._userApi
        .login(params.email, params.password)
        .pipe(tap(() => this._router.navigate(['/explore']))),
  });

  loginError = computed(() => setErrorMessage(this.loginResource.error()));

  login() {
    const credentials = this.loginForm().value();

    this.loginParams.set(credentials);
  }
}

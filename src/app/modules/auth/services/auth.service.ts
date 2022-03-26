import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TokenDto } from 'src/app/shared/dto/token.dto';
import { environment } from 'src/environments/environment';
import { AuthProcessingService } from 'src/app/core/services/auth-processing.service';
import { LoginDto } from '../dto/login.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private authProcessService: AuthProcessingService
  ) {}

  // Connexion utilisateur
  login(loginDto: LoginDto): Observable<TokenDto> {
    console.log(loginDto);
    console.log(environment.apiUrl + '/auth/login');
    return this.httpClient
      .post<TokenDto>(environment.apiUrl + '/auth/login', loginDto)
      .pipe(tap((res: TokenDto) => this.authProcessService.setSession(res)));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { initDto } from '../../shared/dto/init.dto';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor(private httpClient: HttpClient) {}

  init(): Observable<initDto> {
    return this.httpClient.get<initDto>(environment.apiUrl + '/init');
  }

  initPublic(): Observable<initDto> {
    return this.httpClient.get<initDto>(environment.apiUrl + '/init/public');
  }
}

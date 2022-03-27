import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Mark } from '../models/mark.model';
import { User } from '../models/user.model';
import { initDto } from '../../shared/dto/init.dto';
import { InitService } from './init.service';

@Injectable({
  providedIn: 'root',
})
export class InitProcessingService {
  private _marks = new BehaviorSubject<Mark[]>([]);
  private _user = new BehaviorSubject<User | null>(null);

  constructor(private readonly initService: InitService) {}

  setData(): Observable<initDto> {
    const dataObservable = sessionStorage.getItem('Token')
      ? this.initService.init()
      : this.initService.initPublic();

    return dataObservable.pipe(
      tap((data: initDto) => {
        this._marks.next(data.marks);
        this._user.next(data.user);
      })
    );
  }

  get marks(): Observable<Mark[]> {
    return this._marks.asObservable();
  }

  get user(): Observable<User | null> {
    return this._user.asObservable();
  }

  clearData() {
    this._marks.next([]);
    this._user.next(null);
  }
}

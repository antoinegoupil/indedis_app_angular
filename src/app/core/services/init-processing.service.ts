import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Mark } from '../models/mark.model';
import { User } from '../models/user.model';
import { initDto } from '../../shared/dto/init.dto';
import { InitService } from './init.service';

@Injectable({
  providedIn: 'root',
})
export class InitProcessingService {
  private marks = new BehaviorSubject<Mark[]>([]);
  private user = new BehaviorSubject<User | null>(null);

  constructor(private readonly initService: InitService) {}

  setData() {
    const dataObservable = sessionStorage.getItem('Token')
      ? this.initService.init()
      : this.initService.initPublic();

    return dataObservable.pipe(
      tap((data: initDto) => {
        this.marks.next(data.marks);
        this.user.next(data.user);
      })
    );
  }
}

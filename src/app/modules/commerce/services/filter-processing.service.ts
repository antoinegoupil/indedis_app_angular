import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterProcessingService {
  private _name = new BehaviorSubject<string | null>(null);
  private _mark = new BehaviorSubject<number | null>(null);

  constructor() {}

  getName(): Observable<string | null> {
    return this._name.asObservable();
  }

  setName(value: string | null) {
    this._name.next(value);
  }

  getMark(): Observable<number | null> {
    return this._mark.asObservable();
  }

  setMark(value: number | null) {
    this._mark.next(value);
  }
}

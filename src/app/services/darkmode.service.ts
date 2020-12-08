import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Mode {
  l = 'l',
  d = 'd',
}

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  private _darkmode: BehaviorSubject<Mode> = new BehaviorSubject(Mode.l);

  constructor() { }

  get darkmode() {
    return this._darkmode.asObservable();
  }

  toggleMode() {
    if (this._darkmode.value == Mode.d) {
      this._darkmode.next(Mode.l);
    } else {
      this._darkmode.next(Mode.d);
    }
  }
}

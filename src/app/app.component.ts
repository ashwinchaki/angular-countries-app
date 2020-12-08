import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { DarkmodeService, Mode } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  // title = 'angular-countries-app';
  darkmode!: Observable<Mode>;
  

  constructor(private api: ApiService, private darkmodeService: DarkmodeService) {}

  ngOnInit() {
    this.darkmode = this.darkmodeService.darkmode;
  }

  toggleDarkMode() {
    this.darkmodeService.toggleMode();
  }
}

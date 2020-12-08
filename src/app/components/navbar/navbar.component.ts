import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
 
  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit(): void {

  }

  toggleDarkMode() { 
    this.darkmodeService.toggleMode();    
  }

}

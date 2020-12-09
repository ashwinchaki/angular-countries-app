import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/types/country';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.sass']
})
export class CardDisplayComponent implements OnInit {
  @Input()
  country!: Country

  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit(): void {

  }



}

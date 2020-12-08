import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Country } from 'src/app/types/country';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {
  countries!: Observable<Country[]>;

  constructor(private api: ApiService) { };

  ngOnInit(): void {
    this.countries = this.api.GetCountries();
  }

}

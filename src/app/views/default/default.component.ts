import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/types/country';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {
  countries$!: Country[]; // assuming the API is always open
  searchQuery?: string;

  // region filtering
  region?: string;
  Regions = ['Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ];

  constructor(private api: ApiService) { };

  ngOnInit(): void {
    this.api.GetCountries().subscribe((countries) => {
      this.countries$ = countries;
    });
  }

  get countries() {
    return this.countries$.filter((country) => { // filtering by search
      return this.searchQuery ?
        country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        : country; // returns all countries if nothing in search box
    }).filter((country) => {  // filtering by region
      return this.region ?
        country.region.includes(this.region)
        : country; // returns all countries if no region selected
    });
  }

}

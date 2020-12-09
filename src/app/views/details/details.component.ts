import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Country, Language, Currency, RegionalBloc } from 'src/app/types/country';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  country!: Observable<Country>
  borderCountries!: Observable<Country[]>
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.country = this.api.GetCountryByFilter(params.country).pipe(
          mergeMap((res) => {
            this.borderCountries = this.api.GetCountryByCode(res.borders);

            return of(res);
          })
        );
      });
  }

  // turns array of currency objects into array of just their names for display
  getCurrencyNames(currencies: Currency[]) {
    return currencies.map(
      (currency) => currency.name
    ).join(', ');
  }
  // repeated for languages as well
  getLanguageNames(languages: Language[]) {
    return languages.map(
      (language) => language.name
    ).join(', ');
  }

  getTimezoneNames(timezones: string[]) {
    return timezones.map(
      (timezone) => timezone
    ).join(', ');
  }

  getRegionalBlocs(blocs: RegionalBloc[]) {
    return blocs.map(
      (bloc) => bloc.name
    ).join(', ');
  }

}

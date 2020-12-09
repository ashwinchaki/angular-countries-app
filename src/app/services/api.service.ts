import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/types/country';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint = "https://restcountries.eu/rest/v2";
  constructor(private http: HttpClient) { 

  }

  // calls API/all and returns all countries as one object
  GetCountries() {
    return this.http.get<Country[]>(`${this.endpoint}/all`);
  }

  GetCountryByFilter(filter: string) {
    return this.http.get<Country[]>(`${this.endpoint}/name/${filter}`).pipe(map(([res]) => res));
  }

  GetCountryByCode(codes: string[]) {
    console.log(`${this.endpoint}/alpha?codes=${codes.join(';')}`);

    return this.http.get<Country[]>(`${this.endpoint}/alpha?codes=${codes.join(';')}`);
  }
}

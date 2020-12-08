import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/types/country';

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
}

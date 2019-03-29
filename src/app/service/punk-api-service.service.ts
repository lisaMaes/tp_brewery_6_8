import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_BASE_URL: string = 'https://api.punkapi.com/v2/beers/';

@Injectable({
  providedIn: 'root'
})
export class PunkApiServiceService {

  getAle(aleNb:string){

    return this.http.get(`${API_BASE_URL}${aleNb}`);
  }

  getAllAles(){

    return this.http.get(`${API_BASE_URL}${'&per_page=80'}`);
  }

  constructor(private http: HttpClient) { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Theme } from './types/car';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCars() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`)
  }

  getRecentCars(limit?: number) {
    const { apiUrl } = environment;

    let url = `${apiUrl}/themes`;

    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Theme[]>(`${apiUrl}/themes`)
  }

  getSingleCar(id: string) {
    const { apiUrl } = environment;

    return this.http.get<Theme>(`${apiUrl}/themes/${id}`)
  }

  createCar(make: string,
    model: string,
    year: string,
    imgUrl: string,
    mileage: number,
    fuelType: string,
    price: number,
    located: string,) {
    const { apiUrl } = environment;
    const payload = {
      make,
      model,
      year,
      imgUrl,
      mileage,
      fuelType,
      price,
      located,
    }
  }
}

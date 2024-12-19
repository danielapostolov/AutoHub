import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from './types/car';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<Theme[]>(`/api/themes`)
  }

  getRecentCars(limit?: number) {
    let url = `/api/themes`;

    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Theme[]>(`/api/themes`)
  }

  getSingleCar(id: string) {

    return this.http.get<Theme>(`/api/themes/${id}`)
  }



  createCar(make: string,
    model: string,
    year: string,
    imgUrl: string,
    mileage: number,
    fuelType: string,
    price: number,
    located: string,) {
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

    return this.http.post<Theme>(`/api/themes`, payload)
  }
}

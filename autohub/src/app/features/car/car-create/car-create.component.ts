import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-car-create',
  standalone: true,
  imports: [],
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css'
})
export class CarCreateComponent {

  constructor(private api: ApiService) { }

  createCar(event: Event, make: string,
    model: string,
    year: string,
    imgUrl: string,
    mileage: string,
    fuelType: string,
    price: string,
    located: string) {


    event.preventDefault();
  }
}

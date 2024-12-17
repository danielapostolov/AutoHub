import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/car';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars: Theme[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCars().subscribe(cars => {
      this.cars = cars;
    });

  }
}

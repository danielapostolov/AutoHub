import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Theme } from '../../../types/car';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: Theme[] = [];
  isLoading = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCars().subscribe(cars => {
      this.cars = cars.reverse();
      this.isLoading = false;
    });

  }
}

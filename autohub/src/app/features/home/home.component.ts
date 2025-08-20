import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/car';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cars: Theme[] = [];
  isLoading = true;


  constructor(private api: ApiService) { }

  // ngOnInit() {
  //   this.api.getRecentCars(3).subscribe(cars => {
  //     this.cars = cars;
  //     console.log(cars);
      
  //     this.isLoading = false;
  //   });
  // }

   ngOnInit() {
    this.api.getCars().subscribe(cars => {
      this.cars = cars.slice(-3);
      console.log(this.cars);
      
      this.isLoading = false;
    });
  }

}

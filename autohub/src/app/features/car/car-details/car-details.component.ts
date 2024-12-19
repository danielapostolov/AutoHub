import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { Theme } from '../../../types/car';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  car = {} as Theme;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(){
    let id = this.route.snapshot.params['carId']
    this.api.getSingleCar(id).subscribe(car => {
      this.car = car;
    });
  }
}

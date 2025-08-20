import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { Theme } from '../../../types/car';
// import { UserService } from '../../auth/service/user.service';
import { UserService } from '../../auth/service/user.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  car = {} as Theme;
  comments = this.car.posts?.length

  public get isLoggedIn(): boolean {
    return this.userService.isLogged
  }


  constructor(private route: ActivatedRoute, private api: ApiService, private userService: UserService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['carId']
    this.api.getSingleCar(id).subscribe(car => {
      this.car = car;
    });
  }
}

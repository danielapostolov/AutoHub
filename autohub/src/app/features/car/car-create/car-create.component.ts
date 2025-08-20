import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { UserService } from '../../auth/service/user.service';

@Component({
  selector: 'app-car-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css'
})
export class CarCreateComponent {
  carForm = new FormGroup({
    make: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    model: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    year: new FormControl<number>(0, {
      nonNullable: true, validators: [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear())
      ]
    }),
    imgUrl: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/https?:\/\/.+/)] }),
    mileage: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    fuelType: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    price: new FormControl<number>(0, {
      nonNullable: true, validators: [
        Validators.required,
        Validators.min(1)
      ]
    }),
    located: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
  });

  constructor(private api: ApiService, private router: Router, private userService: UserService) { }

  createCar() {
    if (this.carForm.invalid) {
      return;
    }

    let userId = this.userService.userId

    let { make,
      model,
      year,
      imgUrl,
      mileage,
      fuelType,
      price,
      located } = this.carForm.value
    // Submit form data
    this.api.createCar(make!,
      model!,
      year!,
      imgUrl!,
      mileage!,
      fuelType!,
      price!,
      located!,
      userId!
    ).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  get formControls() {
    return this.carForm.controls;
  }
}

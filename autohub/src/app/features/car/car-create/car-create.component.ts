import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-car-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css'
})
export class CarCreateComponent {
  carForm = new FormGroup({
    make: new FormControl('', [Validators.required, Validators.minLength(2)]),
    model: new FormControl('', [Validators.required, Validators.minLength(2)]),
    year: new FormControl('', [
      Validators.required,
      Validators.min(1900),
      Validators.max(new Date().getFullYear())
    ]),
    imgUrl: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\/.+/)]),
    mileage: new FormControl('', [Validators.required, Validators.min(0)]),
    fuelType: new FormControl('', [Validators.required]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),
    located: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor(private api: ApiService, private router: Router) { }

  createCar() {
    if (this.carForm.invalid) {
      return;
    }

    // Submit form data
    // this.api.addCar(this.carForm.value).subscribe({
    //   next: () => this.router.navigate(['/cars']),
    //   error: (err) => console.error('Error creating car:', err)
    // });
  }

  get formControls() {
    return this.carForm.controls;
  }
}

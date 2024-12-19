import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../service/user.service';
import { emailValidator } from '../../../../utils/email.validator';
import { matchPasswordsValidator } from '../../../../utils/matchPasswordsValidator';
import { DOMAINS } from '../../../../constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(''),
    passGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private userService: UserService, private router: Router) { }

  get passGroup() {
    return this.form.get('passGroup');
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    // const {
    //   username,
    //   email,
    //   tel,
    //   passGroup: { password, rePassword } = {},
    // } = this.form.value;

    // this.userService
    //   .register(username!, email!, tel!, password!, rePassword!)
    //   .subscribe(() => {
    //     this.router.navigate(['/themes']);
    //   });
  }
}
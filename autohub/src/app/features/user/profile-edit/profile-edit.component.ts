import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../../utils/email.validator';
import { DOMAINS } from '../../../constants';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../auth/service/user.service';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit{
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(''),

  });

  constructor(private userService: UserService, private router: Router) { }

  get passGroup() {
    return this.form.get('passGroup');
  }

ngOnInit(): void {
  const {username, email, tel} = this.userService.user!;

  this.form.setValue({
    username,
    email,
    tel
  })
}

  editProfile() {
    if (this.form.invalid) {
      console.error("Invalid email or password!")
      return;
    }

    const {
      username,
      email,
      tel,
    } = this.form.value;

    this.userService
      .editProfile(username!, email!, tel!,)
      .subscribe(() => {
        this.router.navigate(['/profile']);
      });
  }
}

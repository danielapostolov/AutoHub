import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../features/auth/service/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  get email(): string {
    return this.userService.user?.email || '';
  }
  constructor(private userService: UserService, private router: Router) { }


  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }

} 

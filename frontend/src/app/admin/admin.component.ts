import { Component } from '@angular/core';
import { AuthService } from '../user/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isOpen = true;

  constructor(private authService: AuthService, private router: Router) {}

  toggleVisibility() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.authService.onLogout().subscribe({
      next: (response) => {
        this.authService.onUpdateAuthStatus(false);
        localStorage.removeItem('userId');
        // this.router.navigateByUrl('/login');
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.router.navigate(['/login']);
  }
}

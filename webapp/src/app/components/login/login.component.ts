import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http
      .post<any>('${environment.apiUrl}/token/', {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          console.log('Login response:', data);
          if (data && data.access) {
            localStorage.setItem('access_token', data.access);
            this.router.navigate(['/reservations']);
          } else {
            this.error = 'Login failed: Invalid response from server.';
            console.error('Invalid login response:', data);
          }
        },
        error: (err) => {
          this.error = 'Invalid credentials';
          console.error('Login error:', err);
        },
      });
  }

}

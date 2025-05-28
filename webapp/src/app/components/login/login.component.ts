import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    this.http.post<any>('https://thisisantonio.pythonanywhere.com/api/token/', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: data => {
        console.log('Login response:', data);
        localStorage.setItem('access_token', data.access);
        this.router.navigate(['/reservations']);
      },
      error: err => {
        this.error = 'Invalid credentials';
        console.error('Login error:', err);
      }
    });
  }

}

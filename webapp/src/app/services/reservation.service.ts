import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = `${environment.apiUrl}/reservations/`;
  private token = '';

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.token = token;
  }

  private authHeaders() {
    const token = localStorage.getItem('access_token');
    return token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {};
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl, this.authHeaders());
  }

  addReservation(data: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.baseUrl, data, this.authHeaders());
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`, this.authHeaders());
  }

  updateReservation(id: number, data: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.baseUrl}${id}/`,
      data,
      this.authHeaders()
    );
  }
}

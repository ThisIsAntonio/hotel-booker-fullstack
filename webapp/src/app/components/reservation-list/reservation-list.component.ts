import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {

  @ViewChild('reservationForm') reservationForm!: NgForm;

  reservations: Reservation[] = [];
  successMsg = '';
  errorMsg = '';
  editingId: number | null = null;
  loading = false;
  roomOptions = [
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
    3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010,
    4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010,
    5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010,
  ];
  searchTerm = '';


  form: Reservation = {
    guest_name: '',
    room_number: 0,
    check_in: '',
    check_out: ''
  };

  constructor(private service: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }
  

  loadReservations(): void {
    this.loading = true;
    this.service.getReservations().subscribe({
      next: data => {
        this.reservations = data;
        this.loading = false;
      },
      error: err => {
        console.error('Load error:', err);
        this.loading = false;
      }
    });
  }

  
  logout(): void {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
  }

  isDateInvalid(): boolean {
    if (!this.form.check_in || !this.form.check_out) {
      return false; 
    }

    const checkIn = new Date(this.form.check_in);
    const checkOut = new Date(this.form.check_out);
    return checkOut <= checkIn;
  }

  createReservation(): void {
    this.successMsg = '';
    this.errorMsg = '';

    if (this.editingId !== null) {
      // Modo edición
      this.service.updateReservation(this.editingId, this.form).subscribe({
        next: () => {
          this.loadReservations();
          this.cancelEdit(); // volver a modo creación
          this.successMsg = 'Reservation updated successfully!';
          this.reservationForm.resetForm(); // resetear el formulario
        },
        error: err => {
          console.error('Update error:', err);
          this.errorMsg = 'Failed to update reservation.';
        }
      });
    } else {
      // Modo creación
      this.service.addReservation(this.form).subscribe({
        next: () => {
          this.loadReservations();
          this.form = { guest_name: '', room_number: 0, check_in: '', check_out: '' };
          this.successMsg = 'Reservation created successfully!';
        },
        error: err => {
          console.error('Error creating reservation:', err);
          this.errorMsg = 'Failed to create reservation.';
        }
      });
    }
  }

  filteredReservations(): Reservation[] {
    const term = this.searchTerm.toLowerCase();
    return this.reservations.filter(r =>
      r.guest_name.toLowerCase().includes(term) ||
      (r.email?.toLowerCase().includes(term) || false) ||
      (r.phone?.toLowerCase().includes(term) || false) ||
      r.room_number.toString().includes(term)
    );
  }
  
  deleteReservation(id: number | undefined): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.service.deleteReservation(id).subscribe({
        next: () => {
          this.loadReservations();
          this.successMsg = 'Reservation deleted successfully!';
        },
        error: err => {
          console.error('Delete error:', err);
          this.errorMsg = 'Failed to delete reservation.';
        }
      });
    }
  }

  editReservation(res: Reservation): void {
    this.form = { ...res }; // clona el objeto
    this.editingId = res.id || null;
  }

  cancelEdit(): void {
    this.editingId = null;
    this.form = { guest_name: '', room_number: 0, check_in: '', check_out: '' };
  }

}


import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reservations', component: ReservationListComponent, canActivate: [authGuard] }
];

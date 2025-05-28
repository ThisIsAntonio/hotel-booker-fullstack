import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    getUsername(): string | null {
        const token = this.getToken();
        if (!token) return null;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.username || null;
        } catch {
            return null;
        }
    }

    logout(): void {
        localStorage.removeItem('access_token');
        window.location.href = '/login';
    }
}

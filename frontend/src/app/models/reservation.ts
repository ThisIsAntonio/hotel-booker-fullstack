export interface Reservation {
    id?: number;
    guest_name: string;
    room_number: number;
    check_in: string;
    check_out: string;
    email?: string;
    phone?: string;
}


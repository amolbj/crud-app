import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookingList:any=[];
  constructor(private bookingsvc: BookingService) {

  }

  ngOnInit() {
    this.bookingsvc.getDataFromServer("bookings").subscribe({
      next: (response: string | any[]) => {
        if(response && response.length > 0){
          this.bookingList = response;
          console.log("booking-list",this.bookingList);
        }  
      },

      error: (error: any) => {
          console.log(error);
      },
      complete: () => {

      }
    })

    
  }
}

import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from '../Flight/flight';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
  providers: [],
})
export class ManageFlightsComponent implements OnInit {
  constructor(public flightService: FlightService) {}

  flights: Flight[] = [];

  flightNumber = ''!;
  flightName = '';
  origin = '';
  destination = '';
  seatsAvailable = '';
  fare = '';

  addFlight() {
    const newFlight = new Flight(
      this.flightNumber,
      this.flightName,
      this.origin,
      this.destination,
      this.seatsAvailable,
      this.fare
    );

    this.flightService.addFlight(newFlight).subscribe((data) => {
      console.log(data);
      this.flights.push(newFlight);
    });
  }

  deleteFlight(id?: string) {
    if (id !== undefined) {
      this.flightService.deleteFlight(id).subscribe((data) => {
        this.flights = this.flights.filter(
          (flight) => flight.flightNumber != id
        );
      });
    }
  }

  ngOnInit() {
    this.flightService.getAllFlights().subscribe(
      (data) => {
        console.log(data);
        this.flights = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

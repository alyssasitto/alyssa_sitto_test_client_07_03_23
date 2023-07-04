import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from '../Flight/flight';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'],
})
export class SearchFlightsComponent implements OnInit {
  constructor(public flightService: FlightService) {}

  flights: Flight[] = [];

  origin = '';
  destination = '';
  error?: string | null;

  searchFlights() {
    this.error = null;

    const searchedFlights = this.flights.filter(
      (flight) =>
        flight.origin?.toLocaleLowerCase() == this.origin &&
        flight.destination?.toLocaleLowerCase() == this.destination
    );

    if (searchedFlights.length == 0) {
      this.error = 'There are no flights with this origin and destination';
    } else {
      this.flights = searchedFlights;
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

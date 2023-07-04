export class Flight {
  flightNumber?: string;
  flightName?: string;
  origin?: string;
  destination?: string;
  seatsAvailable?: string;
  fare?: string;

  constructor(
    flightNumber: string,
    flightName: string,
    origin: string,
    destination: string,
    seatsAvailable: string,
    fare: string
  ) {
    this.flightNumber = flightNumber;
    this.flightName = flightName;
    this.origin = origin;
    this.destination = destination;
    this.seatsAvailable = seatsAvailable;
    this.fare = fare;
  }
}

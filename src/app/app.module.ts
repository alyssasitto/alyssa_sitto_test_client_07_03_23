import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManageFlightsComponent } from './manage-flights/manage-flights.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manageflights', component: ManageFlightsComponent },
  { path: 'search', component: SearchFlightsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageFlightsComponent,
    SearchFlightsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

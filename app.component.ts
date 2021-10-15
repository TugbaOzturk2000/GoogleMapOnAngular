import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GMapDisplay'; 
  lat =41.005745;
  long =28.977114;
  zoom=7;

  markers = [
    {
        lat: 41.005745,
        lng: 28.977114,
        label: 'SultanAhmet'
    },

    {
        lat:  41.082294,
        lng: 29.06732,
        label: 'AnadoluHisarı'
    },

    {
        lat: 41.011574,
        lng: 28.983269,
        label: 'Topkapı Sarayı'
    },

    {
      lat: 40.92043,
      lng: 29.314417,
      label: 'Teknopark'
  }
];
}

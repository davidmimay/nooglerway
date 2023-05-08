import { Component } from '@angular/core';
import { getValue, RemoteConfig, fetchAndActivate } from '@angular/fire/remote-config';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})

export class ActionComponent {

  malamakaiAction:any;

  constructor(remoteConfig: RemoteConfig) {
    fetchAndActivate(remoteConfig)
    .then(() => {
      this.malamakaiAction = getValue(remoteConfig, 'malamakaiAction');
    })
    .catch((err) => {
      console.log('Error:', err)
    });
  }
}

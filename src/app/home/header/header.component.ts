import { Component } from '@angular/core';
import { getValue, RemoteConfig, fetchAndActivate } from '@angular/fire/remote-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  homeTitle: any;
  homeSubtitle: any;
  homeAction: any;

  constructor(remoteConfig: RemoteConfig) {
    fetchAndActivate(remoteConfig)
    .then(() => {
      this.homeTitle = getValue(remoteConfig, 'homeTitle');
      this.homeSubtitle = getValue(remoteConfig, 'homeSubtitle');
      this.homeAction = getValue(remoteConfig, 'homeAction');
    })
    .catch((err) => {
      console.log('Error:', err)
    });
  }
}

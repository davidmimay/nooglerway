import { Component } from '@angular/core';
import { getValue, RemoteConfig, fetchAndActivate } from '@angular/fire/remote-config';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  malamakaiTitle: any;
  malamakaiSubtitle:any;
  malamakaiAction:any;

  constructor(remoteConfig: RemoteConfig) {
    fetchAndActivate(remoteConfig)
    .then(() => {
      this.malamakaiTitle = getValue(remoteConfig, 'malamakaiTitle');
      this.malamakaiSubtitle = getValue(remoteConfig, 'malamakaiSubtitle');
      this.malamakaiAction = getValue(remoteConfig, 'malamakaiAction');
    })
    .catch((err) => {
      console.log('Error:', err)
    });
  }
}

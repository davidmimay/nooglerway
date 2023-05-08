import { Component } from '@angular/core';
<<<<<<< HEAD
import { RemoteConfig, getValue, fetchAndActivate } from '@angular/fire/remote-config';
=======
import { getValue, RemoteConfig, fetchAndActivate } from '@angular/fire/remote-config';
>>>>>>> update

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
<<<<<<< HEAD

=======
>>>>>>> update
    fetchAndActivate(remoteConfig)
    .then(() => {
      this.homeTitle = getValue(remoteConfig, 'homeTitle');
      this.homeSubtitle = getValue(remoteConfig, 'homeSubtitle');
      this.homeAction = getValue(remoteConfig, 'homeAction');
    })
    .catch((err) => {
      console.log('Error:', err)
    });
<<<<<<< HEAD

  }

}
=======
  }
}
>>>>>>> update

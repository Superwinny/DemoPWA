import { Component, OnInit } from '@angular/core';
import { ModalInstallComponent } from './modal-install/modal-install.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DemoPWA';

  constructor(
    private readonly _modalCtrl: ModalController
  ){

  }

  ngOnInit() {
     this.displayToastInstall()
  }

  async displayToastInstall() {
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLocaleLowerCase();
      return /iphone | ipad | ipod /.test(userAgent);
    }
    const isInStandaloneMode = () => {
     return (window.navigator as any).standalone;
    }
    if(isIos() && !isInStandaloneMode()){
      const ionModal = await this._modalCtrl.create({
        component: ModalInstallComponent,
        initialBreakpoint: 0.35
      });
      await ionModal.present()
    }
  }
}

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-install',
  templateUrl: './modal-install.component.html',
  styleUrls: ['./modal-install.component.scss']
})
export class ModalInstallComponent {

  constructor(
    public readonly modalCtrl: ModalController
  ){

  }
}

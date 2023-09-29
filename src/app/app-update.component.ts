import { Component, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { merge, Observable, of, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToastOptions } from '@ionic/core';
import { ToastController } from '@ionic/angular';


@Component({
    selector: 'app-update',
    template: `
        <div *ngIf="updateAvailable$|async"> </div>
    `,
    styles: [``],
    encapsulation: ViewEncapsulation.None
})
export class UpdatesNotificationComponent {
    updateAvailable$: Observable<boolean | {}>;
    closed$ = new Subject<void>();

    constructor(
        private readonly _updates: SwUpdate,
        private readonly _toast: ToastController
    ) {

        this.updateAvailable$ = merge(
          of(false),
          this._updates.versionUpdates.pipe(
            filter((e) => e.type === 'VERSION_DETECTED'),
            map(async () => await this._displayNotif()),
            map(() => true)
          ),
          this.closed$.pipe(map(() => false))
        );
    }

    async activateUpdate() {

        await this._updates.activateUpdate()
        location.reload();
    }

    private async _displayNotif() {
        console.log('display notification...');
        const data = <ToastOptions>{
          message: 'Nouvelle mise à jours!',
          position: 'bottom',
          showCloseButton: true,
          closeButtonText: `Update`,
        };
        const toast = await this._toast.create(data);
        await toast.present();
        await toast.onDidDismiss()
        this.activateUpdate();
      }
}

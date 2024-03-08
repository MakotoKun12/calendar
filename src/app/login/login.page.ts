import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Crear cuenta',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Ingresa tu correo',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Enviar',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  login() {
    this.router.navigate(['/password']);
  }
}

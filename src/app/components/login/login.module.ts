import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, IonicModule],
  exports: [LoginPage]
})
export class LoginModule { }

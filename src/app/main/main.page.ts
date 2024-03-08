import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import {HeaderModule} from '../header/header.module';
import { LoginModule } from '../login/login.module';
import { FooterModule } from '../footer/footer.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink,
    HeaderModule, LoginModule, FooterModule
  ],
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

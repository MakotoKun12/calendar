import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterModule } from 'src/app/footer/footer.module';
import { LoginModule } from 'src/app/login/login.module';
import { HeaderModule } from 'src/app/header/header.module';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink,
    HeaderModule, LoginModule, FooterModule]
})
export class PasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home'])
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HeaderModule} from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { CalendarModule } from '../../components/calendar/calendar.module';
import { NotesModule } from '../../components/notes/notes.module';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderModule, FooterModule, CalendarModule, NotesModule]
})
export class DiaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  segmentValue = 'agenda';
}

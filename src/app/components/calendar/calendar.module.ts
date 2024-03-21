import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, IonicModule],
  exports: [CalendarComponent]
})
export class CalendarModule { }

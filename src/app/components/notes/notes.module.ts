import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes.component';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, IonicModule,FormsModule],
  exports: [NotesComponent]
})
export class NotesModule { }

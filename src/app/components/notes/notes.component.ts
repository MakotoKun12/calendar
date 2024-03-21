import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  noteTitle = '';
  noteContent = '';

  createNote() {
    // Aquí puedes agregar el código para crear la nota
    console.log('Título de la nota:', this.noteTitle);
    console.log('Contenido de la nota:', this.noteContent);
  }
}

import { Component, OnInit } from '@angular/core';
import { notes } from '../notes';
@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent implements OnInit {
  notes = notes;

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { notes } from '../notes'
import { Pipe } from '@angular/core';
@Component({
  selector: 'app-notes-desc',
  templateUrl: './notes-desc.component.html',
  styleUrls: ['./notes-desc.component.css']
})

export class NotesDescComponent implements OnInit {
  note;
  
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.note = notes[+params.get('noteId')];
    })
  }

  
}


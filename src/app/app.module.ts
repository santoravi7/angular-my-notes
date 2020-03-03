import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { NotesDescComponent } from './notes-desc/notes-desc.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
      { path: '', component: MyNotesComponent },
      { path: 'notes/:noteId', component: NotesDescComponent },
    ]) ],
  declarations: [ AppComponent, MyNotesComponent, NotesDescComponent, NavBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

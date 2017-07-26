import { Component} from '@angular/core'

@Component({
   template:`
   <div class="dashboard">
     <note-detail></note-detail>
     <note-detail></note-detail>
     <note-detail></note-detail>
     <note-detail></note-detail>
   </div>
   `,
  styles:[
    `
    .dashboard{
      padding: 20px;
    }
    `
  ]
})

export class NoteListComponent{

}
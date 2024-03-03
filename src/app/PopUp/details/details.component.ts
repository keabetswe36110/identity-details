import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,private matdialogRef:MatDialogRef<DetailsComponent> ){}

  close():void{
    this.matdialogRef.close('cancel succesful')
  }
}

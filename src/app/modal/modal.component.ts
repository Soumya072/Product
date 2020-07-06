import { Component, OnInit, Optional, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  fromPage={}
  total=0;
  constructor(public dialogRef:MatDialogRef<ModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.total = data.totalCost;
    
  }
  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }

}

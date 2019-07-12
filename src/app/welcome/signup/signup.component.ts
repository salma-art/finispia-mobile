import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class signUpComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogsignComponent, {
      width: '350px',
    });
  }
  ngOnInit() { }
}


@Component({
  selector: 'app-dialogsign',
  templateUrl: './dialogsign.component.html',
})


export class DialogsignComponent {
}

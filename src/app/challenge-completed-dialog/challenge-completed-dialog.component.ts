import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-completed-dialog',
  templateUrl: './challenge-completed-dialog.component.html',
  styleUrls: ['./challenge-completed-dialog.component.css']
})
export class ChallengeCompletedDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChallengeCompletedDialogComponent>) { }

  ngOnInit() {
  }

}

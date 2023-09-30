import {Component, Inject} from '@angular/core';
import {AppService} from "../../../../app/services/app.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-alert-dialog-manager',
  templateUrl: './alert-dialog-manager.component.html',
  styleUrls: ['./alert-dialog-manager.component.scss']
})
export class AlertDialogManagerComponent {
  // :::
  //

  // ::: vars
  //
  title: string = this.data?.data?.title || '';
  msg: string = this.data?.data?.msg || '';

  // ::: constructor
  //
  constructor(public appService: AppService,
              public dialogRef: MatDialogRef<AlertDialogManagerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  // ::: init
  //

  // ::: ng
  //

  // ::: ui
  //
  closeDialog(result?: any) {
    this.dialogRef.close(result);
  }

  // ::: methods
  //

}


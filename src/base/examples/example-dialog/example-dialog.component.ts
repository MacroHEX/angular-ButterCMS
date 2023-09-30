import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent {

  // ::: vars
  //
  mainForm!: FormGroup;
  mode!: string;
  readOnly?: boolean; // example only
  title = "Titulo del Dialog";

  // ::: constructor
  //
  constructor(//private appService: ExampleAppService,
              public dialogRef: MatDialogRef<ExampleDialogComponent>,
              public formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initMode();
    this.initForms();
  }

  // ::: init
  //
  initMode() {
    this.mode = this.data?.mode || "normal";
    this.readOnly = this.mode === 'readonly';
  }

  initForms() {
    this.mainForm = this.formBuilder.group({
      idCtrl: [this.data?.data?.id || ''],
      nameCtrl: [this.data?.data?.name || '', Validators.required],
      descCtrl: [this.data?.data?.description || '']
    });
  }

  // ::: ng
  //


  // ::: ui
  //
  performDialog() {
    /* try {
     *   let val = undefined;
     *   V.ifNull(val, ExampleModuleExceptions.VAL_NOT_FOUND);
     *
     *   let body = {}; // build call's body with mainForm
     *
     *   this.appService.exampleRestApi(this).path().of().resource()
     *    .body(body)
     *    // BY DEFAULT .onError(err=> this.appService.errorManager().display(err))
     *    .onSuccess((msg)=>{
     *      this.closeDialog(msg);
     *    })
     *   .call();
     *
     * } catch(err) {
     *  //this.appService.errorManager().display(err);
     * }
     *
     */
  }

  closeDialog(result?: any) {
    this.dialogRef.close(result);
  }

}

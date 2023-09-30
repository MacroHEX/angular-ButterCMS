import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ExampleListComponent} from "../example-list/example-list.component";

@Component({
  selector: 'app-example-picker',
  templateUrl: './example-picker.component.html',
  styleUrls: ['./example-picker.component.scss']
})
export class ExamplePickerComponent implements OnInit {

  // ::: vars
  //
  @ViewChild("list") listComponent!: ExampleListComponent;
  title = "Titulo del Dialog";
  mode!: string;

  // ::: constructor
  //
  constructor(//private appService: ExampleAppService,
              public dialogRef: MatDialogRef<ExamplePickerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initMode();
  }

  // ::: ng
  //
  ngOnInit(): void {
    /*
     * let params = {}; // build call's params using this.data
     *
     * this.appService.exampleRestApi(this).path().of().resource()
     *  .params(params)
     *  .onSuccess((msg)=>{
     *    this.listComponent.getSubject().data = msg.list;
     *  })
     * .call();
     */

    // TEST ITEMS
    let list = <any>[
      {id: "1", name: "First Name", description: "First Description"},
      {id: "2", name: "Second Name", description: "Second Description"},
      {id: "3", name: "Third Name", description: "Third Description"}
    ];
    setTimeout(()=>{this.listComponent.getDataSubject().data = list}, 1);
  }

  // ::: init
  //
  initMode() {
    this.mode = this.data?.mode || "normal";
  }

  // ::: ui
  //
  onListAction(event: any) {
    if (event.name == "select") {
      this.closeDialog(event.data);
    }
  }

  closeDialog(result?: any) {
    this.dialogRef.close(result);
  }

}

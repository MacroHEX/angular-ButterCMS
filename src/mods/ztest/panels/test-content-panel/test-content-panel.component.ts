import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {ContentFrame} from "../../../../base/frames/api/content.frame";
import {ExampleDialogComponent} from "../../../../base/examples/example-dialog/example-dialog.component";
import {ExamplePickerComponent} from "../../../../base/examples/example-picker/example-picker.component";

@Component({
  selector: 'app-test-content-panel',
  templateUrl: './test-content-panel.component.html',
  styleUrls: ['./test-content-panel.component.scss']
})
export class TestContentPanelComponent {

  // ::: vars
  //
  page: any;

  // ::: constructors
  //
  constructor(private appService: AppService,
              @Inject(APP_PARENT) protected parent: ContentFrame,
              @Inject(APP_DTO) protected data: any) {
  }

  // ::: ng
  //

  // ::: init
  //

// ::: ui
//
  openExampleDialog() {
    this.appService.dialogAlert({title: "Titulo", msg: "Mensaje"}, "normal", {width: "500px", height: "auto"});
  }

  openDialogWithData(mode ?: string) {
    let data = {id: "1", name: "First Name", description: "First Description"};
    this.appService.dialogManager().open(ExampleDialogComponent, data, mode);
  }

  openExamplePicker() {
    let ref = this.appService.dialogManager().open(ExamplePickerComponent);
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.appService.snack(result.name);
      }
    });
  }

  alertUUID() {
    this.appService.butter().pages().search('simple')
      .onSuccess(msg => {
        console.log(msg.data)
      })
      .call()
  }

}

import {Component, Inject} from '@angular/core';
import {BaseMainFrame} from "../../../../base/frames/base-main.frame";
import {AppService} from "../../../services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {AppFrame} from "../../../../base/frames/api/app.frame";

@Component({
  selector: 'app-priv-main-frame',
  templateUrl: './priv-main-frame.component.html',
  styleUrls: ['./priv-main-frame.component.scss']
})
export class PrivMainFrameComponent extends BaseMainFrame {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(public appService: AppService,
              @Inject(APP_PARENT) parent: AppFrame,
              @Inject(APP_DTO) data: any) {
    super(appService, parent, data);
    this.initFramePortals();
  }

  // ::: ng
  //

  // ::: init
  //
  initFramePortals() {

  }
}

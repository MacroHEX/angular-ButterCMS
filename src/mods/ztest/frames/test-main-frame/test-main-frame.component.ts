import {Component, Inject} from '@angular/core';
import {BaseMainFrame} from "../../../../base/frames/base-main.frame";
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {AppFrame} from "../../../../base/frames/api/app.frame";
import {TestMainHeaderComponent} from "../../panels/test-main-header/test-main-header.component";
import {TestContentFrameComponent} from "../test-content-frame/test-content-frame.component";

@Component({
  selector: 'app-test-main-frame',
  templateUrl: './test-main-frame.component.html',
  styleUrls: ['./test-main-frame.component.scss']
})
export class TestMainFrameComponent extends BaseMainFrame {

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
    this.loadHeader(TestMainHeaderComponent);
    this.loadContent(TestContentFrameComponent);
  }
}

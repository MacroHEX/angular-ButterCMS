import {Component, Inject} from '@angular/core';
import {BaseContentFrame} from "../../../../base/frames/base-content.frame";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {MainFrame} from "../../../../base/frames/api/main.frame";
import {AppService} from "../../../../app/services/app.service";
import {TestContentMenuComponent} from "../../panels/test-content-menu/test-content-menu.component";
import {TestContentPanelComponent} from "../../panels/test-content-panel/test-content-panel.component";

@Component({
  selector: 'app-test-content-frame',
  templateUrl: './test-content-frame.component.html',
  styleUrls: ['./test-content-frame.component.scss']
})
export class TestContentFrameComponent extends BaseContentFrame {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(public appService: AppService,
              @Inject(APP_PARENT) parent: MainFrame,
              @Inject(APP_DTO) data: any) {
    super(appService, parent, data);
    this.initFramePortals();
  }

  // ::: ng
  //

  // ::: init
  //
  initFramePortals() {
    // menu
    this.loadMenu(TestContentMenuComponent);
    // content
    this.loadPanel(TestContentPanelComponent);
    // footer
  }
}

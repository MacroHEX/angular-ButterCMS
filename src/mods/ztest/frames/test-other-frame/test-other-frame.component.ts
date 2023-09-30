import {Component, Inject} from '@angular/core';
import {BaseContentFrame} from "../../../../base/frames/base-content.frame";
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {MainFrame} from "../../../../base/frames/api/main.frame";
import {TestContentMenuComponent} from "../../panels/test-content-menu/test-content-menu.component";
import {TestContentPanelComponent} from "../../panels/test-content-panel/test-content-panel.component";

@Component({
  selector: 'app-test-other-frame',
  templateUrl: './test-other-frame.component.html',
  styleUrls: ['./test-other-frame.component.scss']
})
export class TestOtherFrameComponent extends BaseContentFrame {

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
    //this.loadMenu(TestContentMenuComponent);
    // content
    //this.loadPanel(TestControlPanelComponent);
    // footer
  }
}

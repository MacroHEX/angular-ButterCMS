import {Component, Inject} from '@angular/core';
import {BaseContentFrame} from "../../frames/base-content.frame";
import {ExampleAppService} from "../example-services/example-app.service";
import {APP_DTO, APP_PARENT} from "../../base.module";
import {AppFrame} from "../../frames/api/app.frame";

@Component({
  selector: 'app-example-content-frame',
  templateUrl: './example-content-frame.component.html',
  styleUrls: ['./example-content-frame.component.scss']
})
export class ExampleContentFrameComponent extends BaseContentFrame {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(public appService: ExampleAppService,
              @Inject(APP_PARENT) protected parent: AppFrame,
              @Inject(APP_DTO) protected data: any) {
    super(appService, parent, data);
    this.initFrameContainer();
  }

  // ::: ng
  //
  /*
   * ngOnInit() {
   * }
   */

  // ::: init
  //
  initFrameContainer() {
    //this.loadMenu(ExampleMenuComponent);
    //this.loadPanel(ExamplePanelComponent);
    //this.loadFooter(ExampleFooterComponent);
  }
}

import {Component, Inject} from '@angular/core';
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {ContentFrame} from "../../../../base/frames/api/content.frame";
import {TestContentPanelComponent} from "../test-content-panel/test-content-panel.component";
import {ExamplePanelComponent} from "../../../../base/examples/example-panel/example-panel.component";

@Component({
  selector: 'app-test-content-menu',
  templateUrl: './test-content-menu.component.html',
  styleUrls: ['./test-content-menu.component.scss']
})
export class TestContentMenuComponent {

  // ::: vars
  //

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
  setPanel(panelId: string, data?: any) {
    switch (panelId) {
      case 'test':
        this.parent.loadPanel(TestContentPanelComponent, data);
        break;
      case 'expandable-list':
        this.parent.loadPanel(ExamplePanelComponent, data);
        break;
      default:
        this.parent.unloadPanel();
    }
  }
}

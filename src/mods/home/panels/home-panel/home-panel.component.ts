import {Component, Inject} from '@angular/core';
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {ContentFrame} from "../../../../base/frames/api/content.frame";

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.scss']
})
export class HomePanelComponent {
  // :::
  //

  // ::: vars
  //

  // ::: constructor
  //
  constructor(private appService: AppService,
              @Inject(APP_PARENT) protected parent: ContentFrame,
              @Inject(APP_DTO) protected data: any) {
  }

  // ::: init
  //

  // ::: ng
  //

  // ::: ui
  //

  // ::: methods
  //

}

import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Workplace } from './workplace';
import { Portlet } from './portlet';
@Component({
  selector: 'app-workplaces',
  templateUrl: './workplaces.component.html',
  //templateUrl: './workplaces-accordion.component.html',
  //templateUrl: './workplaces-nogroup.component.html',
  styleUrls: ['./workplaces.component.scss']
})
export class WorkplacesComponent implements OnInit {

  constructor() { }

  itemsFolder: MenuItem[];
  workplaceArray : Workplace[];

    ngOnInit() {
        this.itemsFolder = [
            {label: 'Edit portlet', icon: 'pi pi-fw pi-pencil'},
            {label: 'New folder', icon: 'pi pi-fw pi-folder'},
            {label: 'Other option', icon: 'pi pi-fw pi-info'}
        ];
        var wpCreate : Workplace;
        var portlet1 : Portlet;
        portlet1.header = "Create Document";
        wpCreate.portlets.push();
        this.workplaceArray.push(wpCreate);
    }

}

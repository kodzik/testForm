import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { triggerName } from "../_models/triggerNames";
import { interimTriggerName } from "../_models/interimtriggerNames";
import { IContract } from '../_models/contract';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tabledata = [];
  displayedColumns: string[] = ['name', 'description', 'trigger', 'interimtrigger', 'lbmanEffectivedeadlineinfo', 'edit'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTableData()
  }

  getTableData(){
    this.http.get<IContract[]>(`${environment.apiUrl}/assets/response_1548851123961.json`).subscribe((data: IContract[]) => {
      this.tabledata = data;
      this.tabledata.forEach(element => {
        element.trigger = triggerName[element.trigger];
        element.interimtrigger = interimTriggerName[element.interimtrigger];
      });
    })
  }

}

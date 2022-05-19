import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTableData()
  }

  getTableData(){
    this.http.get(`${environment.apiUrl}/assets/response_1548851123961.json`).subscribe(data => {
      console.log(data);
    })
  }

}

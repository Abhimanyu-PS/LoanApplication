import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  resultstr:any;
  resultno:any;
  resultname:any;
  ngOnInit(): void {
    this.resultstr = history.state.data.res;
    this.resultno = history.state.data.loan;
    this.resultname=history.state.data.name;
  }

}

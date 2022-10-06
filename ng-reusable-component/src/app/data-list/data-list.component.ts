import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {


  @Input() data;
  @Input() showCount = false;
  @Output() calCount = new  EventEmitter<Number>();

  // data = [{
  //   name : 'Sam Johnson',
  //   dept : 'Electrical'
  // },{
  //   name : 'Roy Thomas',
  //   dept : 'Mechanical'
  // },{
  //   name : 'Jim Lasker',
  //   dept : 'Medical'
  // }];
  
  constructor() { }

  ngOnInit() {
  }

}

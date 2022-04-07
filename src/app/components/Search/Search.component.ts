import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})
export class SearchComponent {

  constructor() {}
  @Input() keyWord :string ='';
  @Output() keywordE = new EventEmitter<string>();

  ngOnInit(){

  }
}

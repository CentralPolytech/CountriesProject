import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Affichage',
  templateUrl: './Affichage.component.html',
  styleUrls: ['./Affichage.component.css']
})
export class AffichageComponent implements OnInit {

  @Input() keyWord: string='';

  constructor() { }

  ngOnInit(): void {

  }
}

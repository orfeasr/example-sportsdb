import { Component, OnInit } from '@angular/core';
import { DataStore } from '../store/data.store';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sports: any;

  constructor(public store: DataStore) { }

  ngOnInit(): void {
    this.store.load();
  }

}

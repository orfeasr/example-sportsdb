import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataStore } from '../store/data.store';


@Pipe({
  name: 'search',
})

export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], term: any) {
    let helperSports = items;
    if (term) {
      helperSports = helperSports.filter((ele) => {
        const arrayelement = ele.strSport.toLowerCase();
        return arrayelement.includes(term);
      });
      return helperSports;
    } else {
      return items;
    }
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  term = '';

  constructor(public store: DataStore) { }

  ngOnInit(): void {
    this.store.load();
  }

}

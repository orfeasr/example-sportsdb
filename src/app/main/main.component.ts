import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataStore } from '../store/data.store';
import { DataService } from '../services/data.service';



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
  sports = [];
  initSports = [];
  categories = ['EventSport', 'TeamvsTeam'];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.load();
  }


  load(): void {
    this.data.getAllSports().subscribe(
      res => {
        this.initSports = res.sports;
        this.sports = res.sports;
      }
    );
  }

  applyCategory(event) {
    const category = event.value;
    this.sports = this.initSports;
    if (category) {
      this.sports = this.sports.filter(sport => sport.strFormat === category);
    }
  }

}

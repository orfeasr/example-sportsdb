import { Component, OnInit } from '@angular/core';
import { DataStore } from '../store/data.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport-details',
  templateUrl: './sport-details.component.html',
  styleUrls: ['./sport-details.component.scss']
})
export class SportDetailsComponent implements OnInit {
  currentSport;

  constructor(private router: Router) {
    this.currentSport = router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
  }

}

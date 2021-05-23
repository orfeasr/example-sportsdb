import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  themes = ['dark-theme', 'light-theme']; // <- list all themes in this array
  theme = new BehaviorSubject('light-theme'); // <- initial theme

  constructor() {}
}

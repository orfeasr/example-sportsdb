import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';


@Injectable({
    providedIn: 'root'
})
export class DataStore {
    sports: any;


    constructor(private data: DataService) {
    }

    public load(): void {
        this.data.getAllSports().subscribe(
            res => {
                this.sports = res.sports;
            }
        );
    }
}

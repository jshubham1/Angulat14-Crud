import { Component, OnInit } from '@angular/core';
import { UserData } from '../userData';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData: UserData[] = [];

  constructor(private dataService: UserDataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.allData = res;
      console.table(this.allData);
    });
  }

}

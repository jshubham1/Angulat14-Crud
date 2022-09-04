import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../userData';
import { UserDataService } from '../userData.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userFormData: UserData = {
    id: 0,
    name: '',
    mob: '',
    email: '',
    profession: ''
  };

  constructor(private dataService: UserDataService, private router: Router) { }

  ngOnInit(): void {
  }

  createData() {
    this.dataService.createData(this.userFormData).subscribe({
      next: (res) => {
        this.router.navigate(["/Datahub/home"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}

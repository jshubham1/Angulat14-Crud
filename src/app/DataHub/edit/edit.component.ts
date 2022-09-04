import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../userData';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userFormData: UserData = {
    id: 0,
    name: '',
    mob: '',
    email: '',
    profession: ''
  };

  constructor(private dataService: UserDataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));

      this.getDataById(id);

    });
  }

  getDataById(id: number) {
    this.dataService.getDataById(id).subscribe((data) => {
      this.userFormData = data;
    });
  }

  updateData() {
    this.dataService.updateData(this.userFormData).subscribe({
      next: (data) => {
        this.router.navigate(["Datahub/home"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

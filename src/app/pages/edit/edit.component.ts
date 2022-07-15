import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userID: any;
  userDetail: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersServiceService,
    private formBuilder: FormBuilder,
    private toasttr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((params: any) => {
      this.userID = params.id;
    });
    if (this.userID !== '') {
      this.usersService.getView(this.userID).subscribe((response: any) => {
        this.userDetail = response.user
        this.editUserForm = this.formBuilder.group({
          'fname': new FormControl(this.userDetail.fname),
          'lname': new FormControl(this.userDetail.lname),
          'email': new FormControl(this.userDetail.email),
          'avatar': new FormControl(this.userDetail.avatar),
        });
        console.log(this.editUserForm.value);
        this.dataLoaded = true;
      });
    }
  }
  updateUser() {
    this.usersService.getUpdate(this.userID,this.editUserForm.value).subscribe((response : any) => {
      
    },err => {
      console.log(err)
    })
  }
}

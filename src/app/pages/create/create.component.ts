import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersServiceService,
    private Toastrt: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl(''),
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      avatar: new FormControl(''),
    });
  }
  createUser() {
    this.usersService
      .getCreate(this.addUserForm.value)
      .subscribe((response: any) => {
        try {
          this.Toastrt.success('Create user Success');
          console.log(this.addUserForm.value);
          setTimeout(() => {
            this.router.navigate(['']);
          }, 3000);
        } catch (err) {
          this.Toastrt.error('Unable to create user');
        }
      });
  }
}

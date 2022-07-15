import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users, UsersDelete } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  userList : UsersDelete [] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.deleteUser(params.id)
    });
  }
  deleteUser(id:number){
    this.usersService.getDelete(id).subscribe((response : any ) => {
      this.userList = response
      console.log('delete success')
    },err => {
      console.log(err)
    })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userView : Users | null = null;
 
  constructor(private activedRoute : ActivatedRoute , private usersService : UsersServiceService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((response : any) => {
      this.getUserView(response.id);
    })
  }
  getUserView(id:number){
    this.usersService.getView(id).subscribe((response : any) => {
      this.userView = response.user
    })
  }

}

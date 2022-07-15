import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList : Users [] = []
  constructor(private userService : UsersServiceService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((resposne:any) => {
      this.userList = resposne
    })
  }
}

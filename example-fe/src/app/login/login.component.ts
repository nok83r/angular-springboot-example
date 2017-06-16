import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



class User {
  name: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
     name: '',
     password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user.name = this.userService.getUser();
  }

}

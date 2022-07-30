import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authors:any;

  constructor(private user:UserService,
    private create:CreateComponent) { }

  ngOnInit(): void {
    this.getusers()
    console.log(this.create.info)
  }

  getusers(){
    return this.user.getUser().subscribe({
      next:res =>{
        this.authors = res;
      }
    })
  }

  
}

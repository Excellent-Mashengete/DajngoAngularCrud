import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  Form = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
  });

  submitted = false;
  errorMessage = " "
  info:any 

  constructor(private user:UserService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.email]],
      lname: ['', [Validators.required, ]],
    });
  }

  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }

  onSubmit(): void{
    this.submitted = false;
    let data = {
      fname: this.Form.value.fname,
      lname: this.Form.value.lname
    };

    if(this.Form.invalid)
    { 
      return
    }

    console.log(data)
    this.user.adduser(data).subscribe({
      next:res =>{
        this.info = res;
       
      },error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  newauthor(): void{
    this.submitted = false;
    this.Form.reset()
  }
}

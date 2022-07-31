import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { PublisherService } from 'src/app/services/publisher.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-bookid',
  templateUrl: './bookid.component.html',
  styleUrls: ['./bookid.component.scss']
})
export class BookidComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  
  bookInfo:any
  pub:any
  auth:any
  pubIdentity:any
  authorIdentiy:any
  constructor(private bookid:BooksService,
      private route:ActivatedRoute,
      private publisher:PublisherService,
      private user:UserService) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.getbyID(id)
    this.loading = true;
  }

  getbyID(id:number){
    return this.bookid.getBookById(id).subscribe({
      next:data => {
        this.bookInfo = data
        this.pubIdentity =  this.bookInfo.pubid
        this.authorIdentiy =  this.bookInfo.authorid
        this.getPublisher(this.pubIdentity);
        this.getUser(this.authorIdentiy)
        this.loading = false
      }
    })
  }
  getPublisher(id:number){
    return this.publisher.getPub(id).subscribe({
      next:data =>{
        this.pub = data
        this.loading = false
      }
    })
  }

  getUser(id:number){
    return this.user.getUser(id).subscribe({
      next:data =>{
        this.auth = data
    
      }
    })
  }

}

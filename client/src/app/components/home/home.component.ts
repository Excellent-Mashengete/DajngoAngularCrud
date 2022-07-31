import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { BookDetails } from 'src/app/interceptors/book-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class HomeComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  authors:any
  books:any 
  filterTerm!: any;
  datasource : any
  submitted: boolean = false;
  bookDialog: boolean = false;

  constructor(private book:BooksService, 
    private messageService: MessageService,  
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    
    this.getbooks();
    this.loading = true;
  }

  getbooks(){
    return this.book.getBook().subscribe({
      next:data =>{
        this.books = data
        this.loading = false
      }
    })
    
  }


  deleteProduct(details:BookDetails){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + details.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.book.deletebyId(details.id).subscribe({
        //   next:data =>{
        //     this.getbooks()
        //   }
        // })
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Deleted', life: 3000})
      },
      reject: () => {
        this.messageService.add({severity:'success', summary: 'Rejected', detail: 'You have rejected', life: 3000})
      }
    })
  }

  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }
}


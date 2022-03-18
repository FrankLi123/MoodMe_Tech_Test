import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3,6,9,12];

  constructor(private postService: PostService){}
   
  ngOnInit(): void {
    this.fetchPosts();
  }


  fetchPosts(): void{

    console.log(this.page)
    console.log(this.tableSize)
    this.postService.getAllPosts().subscribe(  //this.page, this.tableSize
    (response) => {
      this.POSTS = response;
      console.log(response);

    }, (error)=>{console.log(error)}
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }



  //   goToPage(pageName: string){
  //   this.router.navigate([`${pageName}`]);
  // }


}
  
import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../blogpostandblogcomment/blogpost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  blogPosts: Array<BlogPost> = blogData;
  constructor() { }

  ngOnInit(): void {
  }

}

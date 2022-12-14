import { Component, OnInit } from '@angular/core';
import { PostService } from '../../app/post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../../app/blogpostandblogcomment/blogpost';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost();
  tags: string;
  constructor(private pService : PostService, private router : Router) { }

  ngOnInit(): void {
  }
  formSubmit(): void {
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = 'BTI425 Student';
    this.blogPost.views = 0;
    this.pService.newPost(this.blogPost).subscribe( () => this.router.navigate(['/admin']));
  }

}

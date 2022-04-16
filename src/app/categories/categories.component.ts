import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class categoriesComponent implements OnInit {
  categories: Array<any>;

  private cat;
  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.cat = this.pService.getCategories().subscribe(pService => this.categories = pService);
  }

}

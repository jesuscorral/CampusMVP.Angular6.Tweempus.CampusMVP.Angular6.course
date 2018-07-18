import { AuthorService } from './../shared/author/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private atuhorService: AuthorService) { }

  ngOnInit() {
    this.atuhorService.getAuthor('1').subscribe(author => console.log(author));
  }

}

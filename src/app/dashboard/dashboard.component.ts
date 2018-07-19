import { Author } from './../shared/author/author.model';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import { AuthorService } from './../shared/author/author.service';
import { Component, OnInit } from '@angular/core';
import { Twimp } from 'src/app/shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  twimpList: Twimp[] = [];
  constructor(private atuhorService: AuthorService,
              private twimpService: TwimpService) { }

  ngOnInit() {
    this.twimpService.getTwimps().subscribe(twimps => {
      Observable.from(twimps).subscribe(twimp =>  {
        this.atuhorService.getAuthor(twimp.author.id).subscribe(author => {
          twimp.author = author;
          this.twimpService.getFavoritesByAuthor('1', twimp.id).subscribe(favorite => {
            twimp.favorite = favorite;
            this.twimpList.push(twimp);
          });
        });
      });
    });
  }

}

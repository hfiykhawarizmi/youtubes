import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtubeservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})

  export class HomComponent {
    searchQuery: string = '';
  
    constructor(private youtubeService: YoutubeService, private router: Router) {}
  
    searchVideos() {
      if (this.searchQuery.trim() !== '') {
        this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
      }
    }
  }
  


import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { TopTenArtistsService } from 'src/app/services/top-ten-artists.service';

@Component({
  selector: 'app-top-ten-artists',
  templateUrl: './top-ten-artists.component.html',
  styleUrls: ['./top-ten-artists.component.css']
})
export class TopTenArtistsComponent implements OnInit {
  topTenArtists = [];

  constructor(private tokenService: TokenService, private topTenArtistsServices: TopTenArtistsService) { }

  ngOnInit(): void {
    this.topTenArtistsServices.getTopTenArtists().subscribe(
      data=>{
        console.log(data);
        for(var i of data){
          var dob = new Date(i['dob']);
          i['dob'] = dob.toDateString();
        }
        this.topTenArtists = data;
      }
    )
  }
  getRank(obj: any): number{

    return 1+this.topTenArtists.indexOf(obj);
  }

}

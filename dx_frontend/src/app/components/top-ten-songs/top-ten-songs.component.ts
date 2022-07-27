import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { TopTenSongsService } from 'src/app/services/top-ten-songs.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/_modal/modal.service';
import { SongRatingService } from 'src/app/services/song-rating.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistsService } from 'src/app/services/artists.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-ten-songs',
  templateUrl: './top-ten-songs.component.html',
  styleUrls: ['./top-ten-songs.component.css']
})
export class TopTenSongsComponent implements OnInit {
  map = {};
  topTenSongs = [];
  image: any = null;
  url: string = null;
  bodyText: string = null;
  s1: number = 0;
  s2: number = 0;
  s3: number = 0;
  s4: number = 0;
  s5: number = 0;
  rst1: boolean = false;
  rst2: boolean = false;
  rst3: boolean = false;
  rst4: boolean = false;
  rst5: boolean = false;
  rating: string = "";
  songId: string = "";
  userId: string = "";
  ratedSongs = {};
  isLoggedIn = false;
  allArtists: any;
  isArtristPresent: boolean = true;
  isSongPresent: boolean = false;
  file: File = null;
  constructor(private tokenService: TokenService,
    private topTenSongsService: TopTenSongsService,
    private sanitizer: DomSanitizer, private modalService: ModalService,
    private songRatingService: SongRatingService, private artistsService: ArtistsService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.tokenService.getToken()){
      this.router.navigate([{ outlets: { lg: ['login'] }}]);
    }
    this.userId = this.tokenService.getToken();
    this.topTenSongsService.getTopTenSongs().subscribe(
      data => {
        console.log(data);
        console.log(data.length);
        var n = data.length;
        for (var i = 0; i < n; i++) {
          if (data[i].sname in this.map) {
            data[this.map[data[i].sname]].name = [data[this.map[data[i].sname]].name, ', ', data[i].name].join('');
            data[i] = null;
            //this.topTenSongs[data[i].sname].push(data[i].name);
          }
          else {
            this.map[data[i].sname] = i;
            //this.topTenSongs[data[i].sname].push(data[i].name);
          }
        }
        data.forEach((item, index) => {
          if (item === null) data.splice(index, 1);
        });
        console.log(data);
        this.topTenSongs = data;
        this.getRatedSongs();
        this.url = this._arrayBufferToBase64(data[0].image.data);
        //console.log(this.url);
      },
      err => {
        console.log(err);
      }
    );

  }

  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  getRank(obj: any): number {

    return 1 + this.topTenSongs.indexOf(obj);
  }

  openModal(id: string) {
    this.songId = id;
    console.log(id);
    this.modalService.open("custom-modal-1");
  }
  openAddSongModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  closeAddSongModal(id: string) {
    this.modalService.close(id);
  }

  onChange(i: number): void {
    console.log(this.rst1);
    console.log(this.rst2);
    this.rating = '' + i;
    if (i == 1) {
      this.s1 = 1 - this.s1;
      this.rst1 = !this.rst1
    }
    else if (i == 2) {
      this.s2 = 1 - this.s2;
      this.rst2 = !this.rst2
    }
    else if (i == 3) {
      this.s3 = 1 - this.s3;
      this.rst3 = !this.rst3
    }
    else if (i == 4) {
      this.s4 = 1 - this.s4;
      this.rst4 = !this.rst4
    }
    else {
      this.s5 = 1 - this.s5;
      this.rst5 = !this.rst5
    }
  }

  rate(): void {
    this.rst1 = false;
    this.rst2 = false;
    this.rst3 = false;
    this.rst4 = false;
    this.rst5 = false;
    console.log(this.rating);
    this.rateASong();
    this.closeModal("custom-modal-1");
  }

  getRatedSongs(): void {
    this.songRatingService.getSongsRatedByUser(this.userId).subscribe(
      data => {
        for (var i of data) {
          this.ratedSongs[i.songId] = i.rating;
        }
        for (var i of this.topTenSongs) {
          if (this.ratedSongs[i.sid]) {
            i['rating'] = this.ratedSongs[i.sid];
          } else {
            i['rating'] = null;
          }
        }
        console.log(data);
        console.log(this.topTenSongs)
      }
    );
  }

  rateASong(): void {
    if (this.getRatedSongs[this.songId] == null) {
      this.songRatingService.rateSong(this.songId, this.userId, this.rating).subscribe(
        data => {
          console.log(data);
          this.getRatedSongs[this.songId] = this.rating;
          for (var i of this.topTenSongs) {
            if (i['sid'] == this.songId) {
              i['rating'] = this.rating;
            }
          }
          console.log(this.topTenSongs);
        }

      );
    }

  }
  getAllArtists(): void{
    this.artistsService.getAllArtists().subscribe(
      data=>{
        console.log(data);
        this.allArtists = data;
      }
    )
  }
  addSong(): void{
    this.router.navigate(['addS']);
  }

}

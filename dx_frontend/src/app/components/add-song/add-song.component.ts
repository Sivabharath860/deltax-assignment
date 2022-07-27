import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ArtistsService } from 'src/app/services/artists.service';
import { SongRatingService } from 'src/app/services/song-rating.service';
import { SongService } from 'src/app/services/song.service';
import { TokenService } from 'src/app/services/token.service';
import { TopTenSongsService } from 'src/app/services/top-ten-songs.service';
import { ModalService } from 'src/app/_modal/modal.service';
import { IDropdownSettings, } from 'ng-multiselect-dropdown'

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dor: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    aname: new FormControl('',[Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  artistForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dob: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required])
  });
  dropdownList  = [];
  dropdownSettings:IDropdownSettings={}; 
  allArtists: any;
  isArtristPresent: boolean = true;
  isSongPresent: boolean = false;
  file: File = null;
  txt: string = "";
  constructor(private tokenService: TokenService,
    private topTenSongsService: TopTenSongsService,
    private sanitizer: DomSanitizer, private modalService: ModalService,
    private songRatingService: SongRatingService, private artistsService: ArtistsService, 
    private songService: SongService ,private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllArtists();
    this.dropdownSettings = {
      idField: 'artistId',
      textField: 'name',
      allowSearchFilter: true
    };
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  get f() {
    return this.myForm.controls;
  }
  get f1(){
    return this.artistForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: event.target.files[0]
      });
    }
  }
  submit() {
    const formData = new FormData();
    var artists: any = this.myForm.get('aname').value;
    formData.append('file', this.file,"i");
    formData.append('name', this.myForm.get('name').value);
    formData.append('dor', this.myForm.get('dor').value);
    formData.append('aname', this.myForm.get('aname').value);
    console.log(this.myForm);
    console.log("....");
    console.log(formData.get('name'));
    this.songService.checkSong(this.myForm.get('name').value).subscribe(
      data=>{
        console.log(this.myForm.get('name').value);
        console.log(data);
        if(data.length==0){
          this.songService.addSong(formData).subscribe(
            data=>{
              console.log(data.insertId);
              for(var artist of artists){
                this.addArtistToSong(data.insertId,artist.artistId);
              }
              this.myForm.reset();
              this.txt = "Song";
              //this.closeModal('custom-modal-1');
              this.openModal('custom-modal-3');
              this.isSongPresent = false;
            }
          )
        }else{
          this.isSongPresent = true;
        }
      }
    )
  }
  getAllArtists(): void{
    this.artistsService.getAllArtists().subscribe(
      data=>{
        console.log(data);
        this.allArtists = data;
        this.dropdownList = data;
      }
    )
  }
  addArtist(): void{
    console.log(this.artistForm.get('name').value);
    var name: string = this.artistForm.get('name').value;
    var dob: string = this.artistForm.get('dob').value;
    var bio: string = this.artistForm.get('bio').value;
    this.artistsService.addArtist(name,dob,bio).subscribe(
      data=>{
        console.log("in add Artist");
        this.isArtristPresent = true;
        console.log(data);
        this.getAllArtists();
        this.artistForm.reset();
        this.txt = "Artist";
        this.closeModal('custom-modal-1')
        this.openModal('custom-modal-3')
      }
    )
  }

  addArtistToSong(songId: string,artistId:string): void{
    this.artistsService.addArtistToSong(songId,artistId).subscribe(
      data=>{
        console.log("added combination");
        console.log(data);
      }
    )
  }

}

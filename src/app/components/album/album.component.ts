import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  userAlbum: any;
  constructor( public dialogref: MatDialogRef<AlbumComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any , private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getAllphotos().subscribe(res => {
      let photos: any;
      photos = res;
      this.userAlbum = photos.filter((a: { albumId: any; }) => a.albumId === this.data.album.id);
      console.log(this.userAlbum);
    });
    // console.log(this.data.album.id);
  }

}

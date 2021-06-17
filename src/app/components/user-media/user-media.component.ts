import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-user-media',
  templateUrl: './user-media.component.html',
  styleUrls: ['./user-media.component.css']
})
export class UserMediaComponent implements OnInit {
  @Input() id: any;
  userAlbum: any;
  userId: any;

  constructor( private apiservice: ApiService, public dialoge: MatDialog) {}

  ngOnInit(): void {
    this.apiservice.getAllAlbum().subscribe(res => {
      let allAlbum: any;
      allAlbum = res;
      this.userAlbum = allAlbum.filter( (a: { userId: any; }) => a.userId === this.id);
      console.log(this.userAlbum);
    });
  }
  openAlbum = (item: any) => {
    const dialogref = this.dialoge.open(AlbumComponent, {
      width: '500px',
      height: '500px',
      data: { firstname: 'vishal', lastname: 'kumar', id: this.id, album: item }
    });
  }

}


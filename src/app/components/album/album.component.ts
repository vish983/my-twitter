import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: any;
  constructor( public dialogref: MatDialogRef<AlbumComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    console.log(this.data);

  }

}

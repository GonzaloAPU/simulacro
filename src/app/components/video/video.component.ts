import { Component } from '@angular/core';
import { ApivideoService } from '../../services/apivideo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-video',
  imports: [CommonModule, FormsModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

  constructor(private apivideoService: ApivideoService) {}
  listaVideos:any[]=[]
  name:string='';

  buscarVideo(){
    this.apivideoService.getVideo(this.name).subscribe(
      (data:any)=> {
        this.listaVideos = data.contents;
        console.log(this.listaVideos);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}

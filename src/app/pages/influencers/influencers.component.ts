import { Component, OnInit,Input } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfluencersService } from '../../services/influencers.service';
import { InfluencerModel } from '../../models/influencer.model';
import { InfluencerResponse } from '../../models/influcencer.response';


@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit {
   
    influencers: InfluencerModel[]=[];
    cargando =false;


  constructor(private influencersService: InfluencersService ,private modalService: NgbModal) {}

  ngOnInit(){
    this.cargando=true;

    this.influencersService.getInfluencers().subscribe( resp  => {
     
        this.influencers=resp;
      /*   this.influencers=resp; */

      this.cargando=false;
      });


  }



}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  img =''
  title=''
  titles:string[] = [ "LOG CABIN" , "TASTY CAKE" , "CIRCUS TENT" , "CONTROLLER" ,"LOCKED SAFE" ,"SUBMARINE"]
  imageURL:string[] =[
    "../../assets/imgs/cabin.png",
    "../../assets/imgs/cake.png",
    "../../assets/imgs/circus.png",
    "../../assets/imgs/game.png",
    "../../assets/imgs/safe.png",
    "../../assets/imgs/submarine.png",
  ]
  constructor() {

  }


  data(e:any) {
    this.img = this.imageURL[e];
    this.title=this.titles[e]
    // console.log(img);
  }

  ngOnInit(): void {
    
  }

}

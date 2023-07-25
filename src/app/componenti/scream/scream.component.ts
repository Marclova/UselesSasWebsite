import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-scream',
  templateUrl: './scream.component.html',
  styleUrls: ['./scream.component.scss']
})
export class ScreamComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  lastLength: number = 1;
  globalCounter: number = 0;
  aList: Array<string> = [];


  ngOnInit(): void {
    console.log(parseInt(this.route.snapshot.paramMap.get('l')!))
    const n = parseInt(this.route.snapshot.paramMap.get('l')!);
    if(n != null && !isNaN(n))
      this.lastLength = parseInt(this.route.snapshot.paramMap.get('l')!);
  }

  incrementalScream() {
    let currentlength = this.lastLength * 3 / 2;
    this.lastLength = currentlength;
    let personalCounter: number = 0;

    this.aList.push("");
    let aSequence: string = "";
    const index: number = this.aList.length - 1;

    let i = 0;
    const screamer = interval(100).subscribe(() => {
      if (this.globalCounter >= 100) {
        aSequence += "\n";
        this.globalCounter = 0;
        personalCounter = 0;
      }
      if (personalCounter == 200)
      {
        aSequence += "\n";
        personalCounter = 0;
      }
      aSequence += "a";
      this.aList[index] = aSequence;

      i++;
      personalCounter++;
      this.globalCounter++;
      console.log("Scre" + aSequence + "m!")
      if (i >= currentlength) {
        screamer.unsubscribe();
      }
    });
  }

  getRoundedUpLength() {
    return Math.ceil(this.lastLength)
  }

  protected readonly Math = Math;
}

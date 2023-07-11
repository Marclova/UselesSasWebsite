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

  length = 1;
  lastLength = 1;
  aSequence = "a";


  ngOnInit(): void {
    console.log(parseInt(this.route.snapshot.paramMap.get('l')!))
    const n = parseInt(this.route.snapshot.paramMap.get('l')!);
    if(n != null && !isNaN(n))
      this.length = parseInt(this.route.snapshot.paramMap.get('l')!);
  }

  incrementalScream() {
    this.length *= 3/2

    if (this.length > 1 && this.lastLength != this.length) {
      let i = 0;
      let logScream ="";
      const screamer = interval(100).subscribe(() => {
        if(i >= this.lastLength)
          this.aSequence += "a";
        logScream += "a";
        console.log("Scre"+logScream+"m!")
        i++;
        if (i >= this.length) {
          this.lastLength = this.length;
          screamer.unsubscribe();
        }
      });
    }
  }

  getRoundedUpLength() {
    return Math.ceil(this.length)
  }

  protected readonly Math = Math;
}

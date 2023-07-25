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

  nextScreamLength: number = 1; //length of the next scream
  randomReturnCounter: number = 0;  //this counter will insert a return into a random string every 100 "a" wrote
  screamList: Array<string> = [];   //this list is stormed by many threads, but only one thread for element


  ngOnInit(): void {
    console.log(parseInt(this.route.snapshot.paramMap.get('l')!))
    const n = parseInt(this.route.snapshot.paramMap.get('l')!);
    if(n != null && !isNaN(n))
      this.nextScreamLength = parseInt(this.route.snapshot.paramMap.get('l')!);
  }

  incrementalScream() {  //multi-threading warning!
    let currentlength = this.nextScreamLength * 3 / 2;  //set this thread's parameter
    this.nextScreamLength = currentlength;  //increment the next thread's parameter
    let lastReturnLengthCounter: number = 0;  //counts string lenght from las return

    //set this thread's place in the list
    this.screamList.push("");
    let aSequence: string = "";
    const index: number = this.screamList.length - 1;

    //actual creation and cycling of the thread
    let i = 0;
    const screamer = interval(100).subscribe(() => {
      if (this.randomReturnCounter >= 100) {  //this block of code is competed by all the running threads, so it will be executed randomly by one of them
        aSequence += "\n";
        this.randomReturnCounter = 0;
        lastReturnLengthCounter = 0;
      }
      if (lastReturnLengthCounter == 200) //some threads may never have "their turn" to use the previous "if", so there's this limitator with a local counter
      {
        aSequence += "\n";
        lastReturnLengthCounter = 0;
      }
      aSequence += "a";  //local incrementation
      this.screamList[index] = aSequence;  //global update

      i++;
      lastReturnLengthCounter++;
      this.randomReturnCounter++;
      console.log("Scre" + aSequence + "m!") //this is just for fun
      if (i >= currentlength) {  //check when the thread has finished its job...
        screamer.unsubscribe();  //...and then kill it.
      }
    });
  }

  getRoundedUpLength() {
    return Math.ceil(this.nextScreamLength)
  }

  protected readonly Math = Math;
}

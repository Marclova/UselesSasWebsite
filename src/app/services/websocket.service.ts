import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Console } from 'console';
import { observable, Observable, Observer, Subject } from 'rxjs';


@Injectable()
export class WebsocketService {

  constructor() { }

  private subject!: Subject<MessageEvent>;


  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject)
    {
      this.subject = this.create(url);
      console.log("succesfully connected: " + url);
    }
    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      }
    )

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    }

    return Subject.create(observer, Observable);
  }

 }

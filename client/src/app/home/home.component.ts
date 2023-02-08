import { Component, OnInit, ViewChild } from '@angular/core';
import { BetService } from '../../services/bet.service';
import { BetModel } from '../../models/bet.model';
import { Socket } from 'ngx-socket-io';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BetComponent } from '../components/bet/bet.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false,
  };

  focus;
  focus1;

  public visible = true;
  public bets: Array<BetModel>;
  public notification: any;

  constructor(private socket: Socket,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) {
    socket.connect();
    socket.on('connect', () => {
      console.log('Connected');
      console.log('emit identy:');
      socket.emit('identity', sessionStorage.getItem('stoken'), (response) => {
          console.log('Identity:', response);
          if (response) {
            this.loadBets();
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Ya iniciaste sesion en otro dispositivo, cierra sesion para continuar',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
        },
      );
    });
    socket.on('error', (data) => {
      console.log(data);
    });
    socket.on('bets', (data) => {
      this.bets = data;
      console.log(this.bets);
    });
    socket.on('update_bet', (data) => {
      console.log('update_bet', data);
      const bet = data as BetModel;
      const b = this.bets.find(b => b._id == bet._id);
      if (b) {
        const index = this.bets.indexOf(b);
        this.bets[index].likes = bet.likes;
        this.bets[index].odd1 = bet.odd1;
        this.bets[index].odd2 = bet.odd2;
        this.bets[index].updated_at = bet.updated_at;
        this.notify(bet.event1_details.name, bet.percent.toPrecision(2));
      } else {
        this.socket.emit('get', bet._id);
        console.log('request', bet._id);
      }
    });
    socket.on('load_bet', (data) => {
      const bet = data as BetModel;
      console.log('LOAD BET', bet);
      this.bets.splice(0, 0, bet);
      this.notify(bet.event1_details.name, bet.percent.toPrecision(2));
    });
    socket.on('remove_bet', (data) => {
      console.log('LOAD BET', data);
      const b = this.bets.find(b => b._id == data);
      if (b) {
        const index = this.bets.indexOf(b);
        this.bets.splice(index, 1);
      }
    });
  }

  like(qty: number, bet: BetModel) {
    this.socket.emit('like', {
      _id: bet._id,
      like: qty,
    });
  }

  private loadBets() {
    console.log('load bets');
    this.socket.emit('load', response => {
      },
    );
  }

  ngOnInit() {
    this.requestNotification();
    document.addEventListener('visibilitychange', () => {
      this.visible = document.visibilityState === 'visible';
    });
  }

  requestNotification() {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
      });
    }
  }

  notify(title, body) {
    if (this.visible) {
      this._snackBar.open(title, body, {
        duration: 4000,
        verticalPosition: 'top',
      });
    } else {
      if (!this.notification) {
        const options = {
          body: body,
        };
        this.notification = new Notification(title, options);
        setTimeout(() => {
          this.notification.close();
          this.notification = null;
        }, 5000);
      }

    }
  }

  viewBet(bet) {
    const dialogRef = this.dialog.open(BetComponent, {
      height: '80vh',
      width: '80vw',
      data: bet,
    });
  }
}

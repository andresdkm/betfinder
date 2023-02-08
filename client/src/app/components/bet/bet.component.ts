import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BetModel } from '../../../models/bet.model';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css'],
})
export class BetComponent implements OnInit {

  p1: number;
  p2: number;
  p3: number;
  value1: number;
  value2: number;
  value3: number;
  total: number;
  win1: number;
  win2: number;
  win3: number;

  constructor(
    public dialogRef: MatDialogRef<BetComponent>,
    @Inject(MAT_DIALOG_DATA) public bet: BetModel) {
    const percent1 = 1 / parseFloat(bet.odd1.value);
    const percent2 = 1 / parseFloat(bet.odd2.value);
    let percentOfPays = (1 / (percent1 + percent2)) * 100;
    if (this.bet && this.bet.odd3) {
      const percent3 = 1 / parseFloat(bet.odd3.value);
      percentOfPays = (1 / (percent1 + percent2 + percent3)) * 100;
    }
    this.p1 = (1 / parseFloat(bet.odd1.value)) * percentOfPays;
    this.p2 = (1 / parseFloat(bet.odd2.value)) * percentOfPays;
    if (this.bet && this.bet.odd3) {
      this.p3 = (1 / parseFloat(bet.odd3.value)) * percentOfPays;
    }
  }

  ngOnInit() {
  }

  calculateTotal() {
    const unit = this.total / 100;
    this.value1 = this.roundValue(unit * this.p1);
    this.value2 = this.roundValue(unit * this.p2);
    if (this.bet && this.bet.odd3) {
      this.value3 = this.roundValue(unit * this.p3);
    }
    this.win1 = (this.value1 * parseFloat(this.bet.odd1.value)) - this.total;
    this.win2 = (this.value2 * parseFloat(this.bet.odd2.value)) - this.total;
    if (this.bet && this.bet.odd3) {
      this.win3 = (this.value3 * parseFloat(this.bet.odd3.value)) - this.total;
    }
  }

  calculateValue1() {
    this.win1 = (this.value1 * parseFloat(this.bet.odd1.value)) - this.total;
  }

  calculateValue2() {
    this.win2 = (this.value2 * parseFloat(this.bet.odd2.value)) - this.total;
  }

  calculateValue3() {
    this.win3 = (this.value3 * parseFloat(this.bet.odd3.value)) - this.total;
  }

  roundValue(value: number) {
    const coc = Math.floor(value) % 100;
    console.log(coc, value);
    return Math.floor(value) - coc;
  }
}

import Odds from './Odds';
import { EventModel } from '../../../common/models/event.model';
import { OddModel } from '../../../common/models/odd.model';
import { BetModel } from '../../../common/models/bet.model';
import { CollectModel } from '../../../common/models/collect.model';

export class OddsCompare {

  private pub: any;
  private channel: string;
  private _debug: boolean = false;

  set debug(value: boolean) {
    this._debug = value;
  }

  constructor(pub: any, channel: string) {
    this.pub = pub;
    this.channel = channel;
  }

  compare(event1: EventModel, event2: EventModel, runner: string) {
    for (const oddToCompare of this.x12Fixed) {
      const betx1 = oddToCompare[0];
      const betx2 = oddToCompare[1];
      const bet1 = event1.odds.find((element) => {
        return element.name === betx1;
      });
      const bet2 = event2.odds.find((element) => {
        return element.name === betx2;
      });
      if (bet1 && bet2) {
        this.calculeSurebet(bet1, bet2, event1, event2, runner);
      }
      const bet3 = event1.odds.find((element) => {
        return element.name === betx2;
      });
      const bet4 = event2.odds.find((element) => {
        return element.name === betx1;
      });
      if (bet3 && bet4) {
        this.calculeSurebet(bet3, bet4, event1, event2, runner);
      }
    }

    for (const oddToCompare of this.x12OverUnder) {
      const betx1 = oddToCompare[0];
      const betx2 = oddToCompare[1];

      for (const bet1 of event1.odds) {
        if (bet1 && bet1.name) {
          const spl = bet1.name.split('(');
          if (spl.length > 0 && spl[0] === betx1.replace('(:value)', '')) {
            let value = bet1.name.match(new RegExp('[(].*[)]'))[0];
            value = value.replace('(', '');
            value = value.replace(')', '');
            const betx2Find = betx2.replace(':value', value);
            const bet2 = event2.odds.find((element) => {
              return element.name === betx2Find;
            });
            if (bet2) {
              this.calculeSurebet(bet1, bet2, event1, event2, runner);
            }
          }
        }

      }
      for (const bet1 of event2.odds) {
        if (bet1 && bet1.name) {
          const spl = bet1.name.split('(');
          if (spl.length > 0 && spl[0] === betx1.replace('(:value)', '')) {
            let value = bet1.name.match(new RegExp('[(].*[)]'))[0];
            value = value.replace('(', '');
            value = value.replace(')', '');
            const betx2Find = betx2.replace(':value', value);
            const bet2 = event1.odds.find((element) => {
              return element.name === betx2Find;
            });
            if (bet2) {
              this.calculeSurebet(bet1, bet2, event2, event1, runner);
            }
          }
        }

      }
    }

    for (const oddToCompare of this.x12Handicap) {
      const betx1 = oddToCompare[0];
      const betx2 = oddToCompare[1];

      for (const bet1 of event1.odds) {
        if (bet1 && bet1.name) {
          const spl = bet1.name.split('(');
          if (spl.length > 0 && spl[0] === betx1.replace('(:value)', '')) {
            let value = bet1.name.match(new RegExp('[(].*[)]'))[0];
            value = value.replace('(', '');
            value = value.replace(')', '');
            const isNegative = bet1.name.includes('-');
            const betx2Find = betx2.replace(':value', isNegative ? value.replace('-', '+') : value.replace('+', '-'));
            const bet2 = event2.odds.find((element) => {
              return element.name === betx2Find;
            });
            if (bet2) {
              this.calculeSurebet(bet1, bet2, event1, event2, runner);
            }
          }
        }

      }

      for (const bet1 of event2.odds) {
        if (bet1 && bet1.name) {
          const spl = bet1.name.split('(');
          if (spl.length > 0 && spl[0] === betx1.replace('(:value)', '')) {
            let value = bet1.name.match(new RegExp('[(].*[)]'))[0];
            value = value.replace('(', '');
            value = value.replace(')', '');
            const isNegative = bet1.name.includes('-');
            const betx2Find = betx2.replace(':value', isNegative ? value.replace('-', '+') : value.replace('+', '-'));
            const bet2 = event1.odds.find((element) => {
              return element.name === betx2Find;
            });
            if (bet2) {
              this.calculeSurebet(bet1, bet2, event2, event1, runner);
            }
          }
        }

      }
    }

    for (const oddToCompare of this.x13) {
      if (oddToCompare.combinations) {
        for (const combination of oddToCompare.combinations) {
          const betx1 = oddToCompare.items[0].replace(':value', combination);
          const betx2 = oddToCompare.items[1].replace(':value', combination);
          const betx3 = oddToCompare.items[2].replace(':value', combination);
          for (let x = 1; x <= 2; x++) {
            for (let y = 1; y <= 2; y++) {
              for (let z = 1; z <= 2; z++) {
                // tslint:disable-next-line:one-variable-per-declaration
                let bet1, bet2, bet3 = null;
                if (x === 1) {
                  bet1 = event1.odds.find((element) => {
                    return element.name === betx1;
                  });
                } else {
                  bet1 = event2.odds.find((element) => {
                    return element.name === betx1;
                  });
                }

                if (y === 1) {
                  bet2 = event1.odds.find((element) => {
                    return element.name === betx2;
                  });
                } else {
                  bet2 = event2.odds.find((element) => {
                    return element.name === betx2;
                  });
                }

                if (z === 1) {
                  bet3 = event1.odds.find((element) => {
                    return element.name === betx3;
                  });
                } else {
                  bet3 = event2.odds.find((element) => {
                    return element.name === betx3;
                  });
                }
                if (bet1 && bet2 && bet3) {
                  this.calculeSurebet3(bet1, bet2, bet3, (x === 1 ? event1 : event2), (y === 1 ? event1 : event2), (z === 1 ? event1 : event2), runner);
                }

              }
            }
          }
        }
      } else {
        const betx1 = oddToCompare.items[0];
        const betx2 = oddToCompare.items[1];
        const betx3 = oddToCompare.items[2];
        for (let x = 1; x <= 2; x++) {
          for (let y = 1; y <= 2; y++) {
            for (let z = 1; z <= 2; z++) {
              // tslint:disable-next-line:one-variable-per-declaration
              let bet1, bet2, bet3 = null;
              if (x === 1) {
                bet1 = event1.odds.find((element) => {
                  return element.name === betx1;
                });
              } else {
                bet1 = event2.odds.find((element) => {
                  return element.name === betx1;
                });
              }

              if (y === 1) {
                bet2 = event1.odds.find((element) => {
                  return element.name === betx2;
                });
              } else {
                bet2 = event2.odds.find((element) => {
                  return element.name === betx2;
                });
              }

              if (z === 1) {
                bet3 = event1.odds.find((element) => {
                  return element.name === betx3;
                });
              } else {
                bet3 = event2.odds.find((element) => {
                  return element.name === betx3;
                });
              }
              if (bet1 && bet2 && bet3) {
                this.calculeSurebet3(bet1, bet2, bet3, (x === 1 ? event1 : event2), (y === 1 ? event1 : event2), (z === 1 ? event1 : event2), runner);
              }

            }
          }
        }

      }
    }
  }

  private calculeSurebet3(bet1: OddModel, bet2: OddModel, bet3: OddModel, event1: EventModel, event2: EventModel, event3: EventModel, runner: string) {
    const percent1 = (1 / bet1.value) * 100;
    const percent2 = (1 / bet2.value) * 100;
    const percent3 = (1 / bet3.value) * 100;
    if ((percent1 + percent2 + percent3) <= 100) {
      const surebet: CollectModel = {
        bet1,
        bet2,
        bet3,
        event1: event1.event_id ? event1.event_id : event1._id,
        event2: event2.event_id ? event2.event_id : event2._id,
        event3: event3.event_id ? event3.event_id : event3._id,
        percent: 100 - (percent1 + percent2 + percent3),
        runner,
      };
      if (this._debug) {
        console.log(surebet);
      } else {
        this.pub.publish(this.channel, JSON.stringify(surebet));
      }
    }
  }

  private calculeSurebet(bet1: OddModel, bet2: OddModel, event1: EventModel, event2: EventModel, runner: string) {
    if (bet1 && bet2) {
      const percent1 = (1 / bet1.value) * 100;
      const percent2 = (1 / bet2.value) * 100;
      if ((percent1 + percent2) <= 100) {
        const surebet: CollectModel = {
          bet1,
          bet2,
          event1: event1.event_id ? event1.event_id : event1._id,
          event2: event2.event_id ? event2.event_id : event2._id,
          percent: 100 - (percent1 + percent2),
          runner,
        };
        if (this._debug) {
          console.log(surebet);
        } else {
          this.pub.publish(this.channel, JSON.stringify(surebet));
        }
      }
    }
  }

  public x13 = [{
    items: [Odds.WIN_1, Odds.WIN_2, Odds.WIN_X],
  },
    {
      items: [Odds.AH1_.replace(':value', '0'), Odds.WIN_X, Odds.WIN_2],
    },
    {
      items: [Odds.AH2_.replace(':value', '0'), Odds.WIN_X, Odds.WIN_1],
    },
    {
      items: [Odds.AH1_.replace(':value', '0'), Odds.WIN_2X, Odds.WIN_2],
    },
    {
      items: [Odds.AH2_.replace(':value', '0'), , Odds.WIN_1X, Odds.WIN_1],
    },
    {
      items: [
        Odds.AH1_.replace(':value', '-0.25'),
        Odds.WIN_X,
        Odds.WIN_2,
      ],
    },
    {
      items: [
        Odds.AH2_.replace(':value', '-0.25'),
        Odds.WIN_X,
        Odds.WIN_1,
      ],
    },
    {
      items: [
        Odds.AH1_.replace(':value', '-0.25'),
        Odds.WIN_2X,
        Odds.WIN_2,
      ],
    },
    {
      items: [
        Odds.AH2_.replace(':value', '-0.25'),
        Odds.WIN_1X,
        Odds.WIN_1,
      ],
    },
    {
      items: [
        Odds.AH1_.replace(':value', '+0.25'),
        Odds.WIN_X,
        Odds.WIN_2,
      ],
    },
    {
      items: [
        Odds.AH2_.replace(':value', '+0.25'),
        Odds.WIN_X,
        Odds.WIN_1,
      ],
    },
    {
      items: [
        Odds.AH1_.replace(':value', '+0.25'),
        Odds.WIN_2X,
        Odds.WIN_2,
      ],
    },
    {
      items: [
        Odds.AH2_.replace(':value', '+0.25'),
        Odds.WIN_1X,
        Odds.WIN_1,
      ],
    },
    {
      items: [
        Odds.AH1_.replace(':value', '-0.25'),
        Odds.WIN_X,
        Odds.AH2_.replace(':value', '0'),
      ],
    },
    {
      items: [Odds.WIN_1, Odds.WIN_2, Odds.WIN_X],
    }, {
      items: [Odds.WIN_12, Odds.WIN_1X, Odds.WIN_2X],
    }, {
      items: ['FH_1', 'FH_2', 'FH_X'],
    }, {
      items: ['SH_1', 'SH_2', 'SH_X'],
    }, {
      items: ['FH_12', 'FH_1X', 'FH_X2'],
    }, {
      items: ['SH_12', 'SH_1X', 'SH_X2'],
    }, {
      items: ['EH1(:value)', 'EH2(:value)', 'EHX(:value)'],
      combinations: [
        '0:4',
        '0:3',
        '0:2',
        '0:1',
        '4:0',
        '3:0',
        '2:0',
        '1:0',
      ],
    },
  ];

  public x12Handicap = [
    [Odds.FIRST_HALF_ASIAN_HANDICAP_1_, Odds.FIRST_HALF_ASIAN_HANDICAP_2_],
    [Odds.SECOND_HALF_ASIAN_HANDICAP_1_, Odds.SECOND_HALF_ASIAN_HANDICAP_2_],
    [Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_1_, Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_2_],
    [Odds.THIRD_HALF_ASIAN_HANDICAP_1_, Odds.THIRD_HALF_ASIAN_HANDICAP_2_],
    [Odds.CORNERS_HANDICAP_1, Odds.CORNERS_HANDICAP_2],
    [Odds.FIRST_HALF_CORNERS__HANDICAP_1, Odds.FIRST_HALF_CORNERS__HANDICAP_2],
    [Odds.HANDICAP_1, Odds.HANDICAP_2],
    [Odds.HANDICAP_GAMES_1, Odds.HANDICAP_GAMES_2],
    [Odds.HANDICAP_SET_1, Odds.HANDICAP_SET_2],
    [Odds.FIRST_SET_HANDICAP_GAMES_1, Odds.FIRST_SET_HANDICAP_GAMES_2],
    [Odds.HANDICAP_1_INCLUDING_ALL, Odds.HANDICAP_2_INCLUDING_ALL],
    [Odds.FIRST_QUARTER_H1_, Odds.FIRST_QUARTER_H2_],
    [Odds.SECOND_QUARTER_H1_, Odds.SECOND_QUARTER_H2_],
    [Odds.THIRD_QUARTER_H1_, Odds.THIRD_QUARTER_H2_],
    [Odds.FOURTH_QUARTER_H1_, Odds.FOURTH_QUARTER_H2_],

  ];

  public x12OverUnder = [
    [Odds.GOALS_OVER, Odds.GOALS_UNDER],
    [Odds.E1_GOALS_OVER, Odds.E1_GOALS_UNDER],
    [Odds.E2_GOALS_OVER, Odds.E2_GOALS_UNDER],
    [Odds.E1_GOALS_OVER_INCLUDE_ALL, Odds.E1_GOALS_UNDER_INCLUDE_ALL],
    [Odds.E2_GOALS_OVER_INCLUDE_ALL, Odds.E2_GOALS_UNDER_INCLUDE_ALL],
    [Odds.FIRST_HALF_GOALS_OVER, Odds.FIRST_HALF_GOALS_UNDER],
    [Odds.SECOND_HALF_GOALS_OVER, Odds.SECOND_HALF_GOALS_UNDER],
    [Odds.THIRD_HALF_GOALS_OVER, Odds.THIRD_HALF_GOALS_UNDER],
    [Odds.E1_FIRST_HALF_GOALS_OVER, Odds.E1_FIRST_HALF_GOALS_UNDER],
    [Odds.E1_SECOND_HALF_GOALS_OVER, Odds.E1_SECOND_HALF_GOALS_UNDER],
    [Odds.E2_FIRST_HALF_GOALS_OVER, Odds.E2_FIRST_HALF_GOALS_UNDER],
    [Odds.E2_SECOND_HALF_GOALS_OVER, Odds.E2_SECOND_HALF_GOALS_UNDER],
    [Odds.CORNERS_TOTAL_OVER, Odds.CORNERS_TOTAL_UNDER],
    [Odds.E2_CORNERS_TOTAL_OVER, Odds.E2_CORNERS_TOTAL_UNDER],
    [Odds.E1_CORNERS_TOTAL_OVER, Odds.E1_CORNERS_TOTAL_UNDER],
    [Odds.FIRST_HALF_CORNERS_OVER, Odds.FIRST_HALF_CORNERS_UNDER],
    [Odds.SECOND_HALF_CORNERS_OVER, Odds.SECOND_HALF_CORNERS_UNDER],
    [Odds.YELLOW_CARDS_TOTAL_OVER, Odds.YELLOW_CARDS_TOTAL_UNDER],
    [Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_OVER, Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_UNDER],
    [Odds.TOTAL_GAMES_OVER, Odds.TOTAL_GAMES_UNDER],
    [Odds.FIRST_SET_GAMES_OVER, Odds.FIRST_SET_GAMES_UNDER],
    [Odds.E1_TOTAL_GAMES_OVER, Odds.E1_TOTAL_GAMES_UNDER],
    [Odds.E2_TOTAL_GAMES_OVER, Odds.E2_TOTAL_GAMES_UNDER],
    [Odds.POINTS_OVER, Odds.POINTS_UNDER],
    [Odds.POINTS_OVER_INCLUDING_ALL, Odds.POINTS_UNDER_INCLUDING_ALL],
    [Odds.E1_POINTS_OVER, Odds.E1_POINTS_UNDER],
    [Odds.E2_POINTS_OVER, Odds.E2_POINTS_UNDER],
    [Odds.E1_POINTS_OVER_INCLUDING_ALL, Odds.E1_POINTS_UNDER_INCLUDING_ALL],
    [Odds.E2_POINTS_OVER_INCLUDING_ALL, Odds.E2_POINTS_UNDER_INCLUDING_ALL],
    [Odds.FIRST_HALF_POINTS_OVER, Odds.FIRST_HALF_POINTS_UNDER],
    [Odds.SECOND_HALF_POINTS_OVER, Odds.SECOND_HALF_POINTS_UNDER],
    [Odds.SECOND_HALF_POINTS_INCLUDE_ALL_OVER, Odds.SECOND_HALF_POINTS_INCLUDE_ALL_UNDER],
    [Odds.GOALS_OVER_INCLUDING_ALL, Odds.GOALS_UNDER_INCLUDING_ALL],
    [Odds.FIRST_QUARTER_POINTS_OVER, Odds.FIRST_QUARTER_POINTS_UNDER],
    [Odds.SECOND_QUARTER_POINTS_OVER, Odds.SECOND_QUARTER_POINTS_UNDER],
    [Odds.THIRD_QUARTER_POINTS_OVER, Odds.THIRD_QUARTER_POINTS_UNDER],
    [Odds.FOURTH_QUARTER_POINTS_OVER, Odds.FOURTH_QUARTER_POINTS_UNDER],
    [Odds.FOURTH_QUARTER_POINTS_OVER_INCLUDING_ALL, Odds.FOURTH_QUARTER_POINTS_UNDER_INCLUDING_ALL],
    [Odds.FOURTH_QUARTER_POINTS_OVER_INCLUDING_ALL, Odds.FOURTH_QUARTER_POINTS_UNDER_INCLUDING_ALL],

  ];

  public x12Fixed = [
    [Odds.WIN_1, Odds.WIN_2X],
    [Odds.WIN_2, Odds.WIN_1X],
    [Odds.WIN_X, Odds.WIN_12],
    [Odds.FIRST_HALF_WIN_1, Odds.FIRST_HALF_WIN_2X],
    [Odds.FIRST_HALF_WIN_2, Odds.FIRST_HALF_WIN_1X],
    [Odds.FIRST_HALF_WIN_X, Odds.FIRST_HALF_WIN_12],
    [Odds.SECOND_HALF_WIN_1, Odds.SECOND_HALF_WIN_2X],
    [Odds.SECOND_HALF_WIN_2, Odds.SECOND_HALF_WIN_1X],
    [Odds.SECOND_HALF_WIN_X, Odds.SECOND_HALF_WIN_12],
    [Odds.THIRD_HALF_WIN_1, Odds.THIRD_HALF_WIN_2X],
    [Odds.THIRD_HALF_WIN_2, Odds.THIRD_HALF_WIN_1X],
    [Odds.THIRD_HALF_WIN_X, Odds.THIRD_HALF_WIN_12],
    [Odds.THIRD_HALF_WIN_X, Odds.THIRD_HALF_WIN_12],
    [Odds.BOTH_TEAMS_SCORE_YES, Odds.BOTH_TEAMS_SCORE_NO],
    [Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES, Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO],
    [Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES, Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO],
    [Odds.THIRD_HALF_BOTH_TEAMS_SCORE_YES, Odds.THIRD_HALF_BOTH_TEAMS_SCORE_NO],
    [Odds.WIN_1_YES, Odds.WIN_1_NO],
    [Odds.WIN_2_YES, Odds.WIN_2_NO],
    [Odds.FIRST_HALF_GOALS_ODD, Odds.FIRST_HALF_GOALS_EVEN],
    [Odds.SECOND_HALF_GOALS_ODD, Odds.SECOND_HALF_GOALS_EVEN],
    [Odds.THIRD_HALF_GOALS_ODD, Odds.THIRD_HALF_GOALS_EVEN],
    [Odds.CORNERS_EVEN, Odds.CORNERS_ODD],
    [Odds.RED_CARD_YES, Odds.RED_CARD_NO],
    [Odds.E1_RED_CARD_YES, Odds.E1_RED_CARD_NO],
    [Odds.E2_RED_CARD_YES, Odds.E2_RED_CARD_NO],
    [Odds.WIN_NE_1, Odds.WIN_NE_2],
    [Odds.FIRST_SET_WIN_1, Odds.FIRST_SET_WIN_2],
    [Odds.SECOND_SET_WIN_1, Odds.SECOND_SET_WIN_2],
    [Odds.GAMES_EVEN, Odds.GAMES_ODD],
    [Odds.FIRST_SET_GAMES_EVEN, Odds.FIRST_SET_GAMES_ODD],
    [Odds.TEAM_1_WILL_WIN_SOME_HALF_YES, Odds.TEAM_1_WILL_WIN_SOME_HALF_NO],
    [Odds.TEAM_2_WILL_WIN_SOME_HALF_YES, Odds.TEAM_2_WILL_WIN_SOME_HALF_NO],
    [Odds.POINTS_EVEN, Odds.POINTS_ODD],
    [Odds.POINTS_EVEN_INCLUDING_ALL, Odds.POINTS_ODD_INCLUDING_ALL],
    [Odds.SECOND_HALF_POINTS_INCLUDE_ALL_EVEN, Odds.SECOND_HALF_POINTS_INCLUDE_ALL_ODD],
    [Odds.FIRST_QUARTER_ODD, Odds.FIRST_QUARTER_EVEN],
    [Odds.SECOND_QUARTER_ODD, Odds.SECOND_QUARTER_EVEN],
    [Odds.THIRD_QUARTER_ODD, Odds.THIRD_QUARTER_EVEN],
    [Odds.FOURTH_QUARTER_ODD, Odds.FOURTH_QUARTER_EVEN],
    [Odds.E1_POINTS_ODD, Odds.E1_POINTS_EVEN],
    [Odds.E2_POINTS_ODD, Odds.E2_POINTS_EVEN],
    [Odds.E1_POINTS_ODD_INCLUDING_ALL, Odds.E1_POINTS_EVEN_INCLUDING_ALL],
    [Odds.E2_POINTS_ODD_INCLUDING_ALL, Odds.E2_POINTS_EVEN_INCLUDING_ALL],
    [Odds.E1_WIN_SET_YES, Odds.E1_WIN_SET_NO],
    [Odds.E2_WIN_SET_YES, Odds.E2_WIN_SET_NO],
    [Odds.HAS_EXTRA_TIME_YES, Odds.HAS_EXTRA_TIME_NO],

  ];
}

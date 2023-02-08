import Odds from '../../core/Odds';

export default {
    1: {
        name: Odds.WIN_1,
    },
    2: {
        name: Odds.WIN_X,
    },
    3: {
        name: Odds.WIN_2,
    },
    4: {
        name: Odds.WIN_1X,
    },
    5: {
        name: Odds.WIN_12,
    },
    6: {
        name: Odds.WIN_2X,
    },
    180: {
        name: Odds.BOTH_TEAMS_SCORE_YES,
    },
    181: {
        name: Odds.BOTH_TEAMS_SCORE_NO,
    },
    9: {
        name: Odds.GOALS_OVER,
        replace: true,
    },
    10: {
        name: Odds.GOALS_UNDER,
        replace: true,
    },
    7: {
        name: Odds.EH1,
        replace: true,
    },
    8: {
        name: Odds.EH2,
        replace: true,
    },
    3829: {
        name: Odds.AH1_,
        replace: true,
        asian: true,
    },
    3830: {
        name: Odds.AH2_,
        replace: true,
        asian: true,
    },
    11: {
        name: Odds.E1_TOTAL_GAMES_OVER,
        replace: true,
    },
    12: {
        name: Odds.E1_TOTAL_GAMES_UNDER,
        replace: true,
    },
    13: {
        name: Odds.E2_TOTAL_GAMES_OVER,
        replace: true,
    },
    14: {
        name: Odds.E2_TOTAL_GAMES_UNDER,
        replace: true,
    },
    388: {
        name: Odds.E1_NEXT_GOAL,
    },
    389: {
        name: Odds.E2_NEXT_GOAL,
    },
    390: {
        name: Odds.EX_NEXT_GOAL,
    },
    182: {
        name: Odds.GOALS_ODD,
    },
    183: {
        name: Odds.GOALS_EVEN,
    },
    424: {
        name: Odds.EH1,
        european: true,
    },
    425: {
        name: Odds.EHX,
        european: true,
    },
    426: {
        name: Odds.EH2,
        european: true,
    },
    504: {
        name: Odds.TEAM_1_WILL_WIN_SOME_HALF_YES,
    },
    505: {
        name: Odds.TEAM_1_WILL_WIN_SOME_HALF_NO,
    },
    506: {
        name: Odds.TEAM_2_WILL_WIN_SOME_HALF_YES,
    },
    507: {
        name: Odds.TEAM_2_WILL_WIN_SOME_HALF_NO,
    },
    755: {
        name: Odds.E1_GOALS_EVEN,
    },
    757: {
        name: Odds.E1_GOALS_ODD,
    },
    766: {
        name: Odds.E2_GOALS_EVEN,
    },
    767: {
        name: Odds.E2_GOALS_ODD,
    },
    475: {
        name: Odds.E1_LAST_GOAL,
    },
    477: {
        name: Odds.E2_LAST_GOAL,
    },
    476: {
        name: Odds.EX_LAST_GOAL,
    },
    2803: {
        name: Odds.E2_GOALS_UNDER.replace(':value', '0.5'),
    },
    2804: {
        name: Odds.E1_GOALS_UNDER.replace(':value', '0.5'),
    },
};

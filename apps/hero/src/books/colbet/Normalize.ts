import Odds from '../../core/Odds';

export default {
    16: {
        items: {
            1: Odds.WIN_1,
            2: Odds.WIN_X,
            3: Odds.WIN_2,
        },
    },
    51: {
        items: {
            4: Odds.WIN_1X,
            5: Odds.WIN_12,
            6: Odds.WIN_2X,
        },
    },
    98: {
        items: {
            1: Odds.AH1_.replace(':value', '0'),
            3: Odds.AH2_.replace(':value', '0'),
        },
    },
    181: {
        items: {
            20: Odds.BOTH_TEAMS_SCORE_YES,
            21: Odds.BOTH_TEAMS_SCORE_NO,
        },
    },
    85: {
        items: {
            30: Odds.GOALS_ODD,
            31: Odds.GOALS_EVEN,
        },
    },
    121: {
        items: {
            1: Odds.AH1_,
            3: Odds.AH2_,
        },
        handicaps: true,
    },
    70: {
        items: {
            10: Odds.TOTAL_GAMES_OVER,
            11: Odds.TOTAL_GAMES_UNDER,
        },
        replace: true,
    },
    171: {
        items: {
            home: {
                10: Odds.E1_TOTAL_GAMES_OVER,
                11: Odds.E1_TOTAL_GAMES_UNDER,
            },
            away: {
                10: Odds.E2_TOTAL_GAMES_OVER,
                11: Odds.E2_TOTAL_GAMES_UNDER,
            },
        },
        replace: true,
        teams: true,
    },
    52: {
        items: {
            4: Odds.FIRST_HALF_WIN_1X,
            5: Odds.FIRST_HALF_WIN_12,
            6: Odds.FIRST_HALF_WIN_2X,
        },
    },
    172: {
        items: {
            home: {
                10: Odds.E1_FIRST_HALF_GOALS_OVER,
                11: Odds.E1_FIRST_HALF_GOALS_UNDER,
            },
            away: {
                10: Odds.E2_FIRST_HALF_GOALS_OVER,
                11: Odds.E2_FIRST_HALF_GOALS_UNDER,
            },
        },
        replace: true,
        teams: true,
    },
    11: {
        items: {
            1: Odds.SECOND_HALF_WIN_1,
            2: Odds.SECOND_HALF_WIN_X,
            3: Odds.SECOND_HALF_WIN_2,
        },
    },
    102: {
        items: {
            1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
            2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
        },
    },
    72: {
        items: {
            10: Odds.SECOND_HALF_GOALS_OVER,
            11: Odds.SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
    },
    71: {
        items: {
            10: Odds.FIRST_HALF_GOALS_OVER,
            11: Odds.FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
    },
    184: {
        items: {
            20: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
            21: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
        },
    },
    186: {
        items: {
            20: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
            21: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
        },
    },
    173: {
        items: {
            home: {
                10: Odds.E1_SECOND_HALF_GOALS_OVER,
                11: Odds.E1_SECOND_HALF_GOALS_UNDER,
            },
            away: {
                10: Odds.E2_SECOND_HALF_GOALS_OVER,
                11: Odds.E2_SECOND_HALF_GOALS_UNDER,
            },
        },
        replace: true,
        teams: true,
    },
    94: {
        items: {
            30: Odds.SECOND_HALF_GOALS_ODD,
            31: Odds.SECOND_HALF_GOALS_EVEN,
        },
    },
    32: {
        items: {
            259: Odds.WIN_NE_1,
            260: Odds.WIN_NE_2,
        },
    },
    243: {
        items: {
            30: Odds.FIRST_SET_GAMES_EVEN,
            31: Odds.FIRST_SET_GAMES_ODD,
        },
    },
    157: {
        items: {
            259: Odds.FIRST_SET_WIN_1,
            260: Odds.FIRST_SET_WIN_2,
        },
    },
    151: {
        items: {
            10: Odds.TOTAL_GAMES_OVER,
            11: Odds.TOTAL_GAMES_UNDER,
        },
        replace: true,
    },
    242: {
        items: {
            30: Odds.GAMES_ODD,
            31: Odds.GAMES_EVEN,
        },
    },

};

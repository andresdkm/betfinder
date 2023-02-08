import Odds from '../../core/Odds';

export default {
  'Full Time': {
    1: Odds.WIN_1,
    X: Odds.WIN_X,
    2: Odds.WIN_2,
  },
  'Total Goals by Away Team': {
    Over: Odds.E2_GOALS_OVER,
    Under: Odds.E2_GOALS_UNDER,
  },
  'Double Chance - 1st Half': {
    '1X': Odds.FIRST_HALF_WIN_1X,
    '12': Odds.FIRST_HALF_WIN_12,
    'X2': Odds.FIRST_HALF_WIN_2X,
  },
  'Total Goals - 2nd Half': {
    Under: Odds.SECOND_HALF_GOALS_UNDER,
    Over: Odds.SECOND_HALF_GOALS_OVER,
  },
  'Total Goals by Home Team': {
    Over: Odds.E1_GOALS_OVER,
    Under: Odds.E1_GOALS_UNDER,
  },
  'Double Chance': {
    '1X': Odds.WIN_1X,
    '12': Odds.WIN_12,
    'X2': Odds.WIN_2X,
  },
  'Total Goals Odd/Even': {
    Even: Odds.GOALS_EVEN,
    Odd: Odds.GOALS_ODD,
  },
  'Total Goals - 1st Half': {
    Over: Odds.FIRST_HALF_GOALS_OVER,
    Under: Odds.FIRST_HALF_GOALS_UNDER,
  },
  'Total Goals': {
    Over: Odds.GOALS_OVER,
    Under: Odds.GOALS_UNDER,
  },
  'Total Goals by Away Team Odd/Even': {
    Odd: Odds.E2_GOALS_ODD,
    Even: Odds.E2_GOALS_EVEN,
  },
  'Draw No Bet - 1st Half': {
    1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  'Draw No Bet': {
    '1': Odds.AH1_.replace(':value', '0'),
    '2': Odds.AH2_.replace(':value', '0'),
  },
  'Total Goals by Home Team Odd/Even': {
    Even: Odds.E1_GOALS_EVEN,
    Odd: Odds.E1_GOALS_ODD,
  },
  'Total Cards': {
    Over: Odds.YELLOW_CARDS_TOTAL_OVER,
    Under: Odds.YELLOW_CARDS_TOTAL_UNDER,
  },
  'Both Teams To Score': {
    Yes: Odds.BOTH_TEAMS_SCORE_YES,
    No: Odds.BOTH_TEAMS_SCORE_NO,
  },
  'Both Teams To Score - 1st Half': {
    Yes: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
    No: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
  },
  'Both Teams To Score - 2nd Half': {
    Yes: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
    No: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
  },
  'Asian Handicap': {
    handicap: true,
    1: Odds.AH1_,
    2: Odds.AH2_,
  },
  'Asian Handicap - 1st Half': {
    handicap: true,
    1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
    2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
  },
  'Double Chance - 2nd Half': {
    '1X': Odds.SECOND_HALF_WIN_1X,
    '12': Odds.SECOND_HALF_WIN_12,
    'X2': Odds.SECOND_HALF_WIN_2X,
  },
  '2nd Half': {
    1: Odds.SECOND_HALF_WIN_1,
    X: Odds.SECOND_HALF_WIN_X,
    2: Odds.SECOND_HALF_WIN_2,
  },
  'Half Time': {
    1: Odds.FIRST_HALF_WIN_1,
    X: Odds.FIRST_HALF_WIN_X,
    2: Odds.FIRST_HALF_WIN_2,
  },
  '3-Way Handicap': {
    1: Odds.EH1,
    2: Odds.EH2,
    X: Odds.EHX,
  },
  '3-Way Handicap - 1st Half': {
    1: Odds.FIRST_HALF_EH1,
    2: Odds.FIRST_HALF_EH2,
    X: Odds.FIRST_HALF_EHX,
  },
  '3-Way Handicap - 2nd Half': {
    1: Odds.SECOND_HALF_EH1,
    2: Odds.SECOND_HALF_EH2,
    X: Odds.SECOND_HALF_EHX,
  },
  'Draw No Bet - 2nd Half': {
    1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  'Total Corners': {
    Over: Odds.CORNERS_TOTAL_OVER,
    Under: Odds.CORNERS_TOTAL_UNDER,
  },
  'Total Corners by Away Team': {
    Over: Odds.E2_CORNERS_TOTAL_OVER,
    Under: Odds.E2_CORNERS_TOTAL_UNDER,
  },
  'Total Corners by Home Team': {
    Over: Odds.E1_CORNERS_TOTAL_OVER,
    Under: Odds.E1_CORNERS_TOTAL_UNDER,
  },
  'Total Corners - 2nd Half': {
    Over: Odds.SECOND_HALF_CORNERS_OVER,
    Under: Odds.SECOND_HALF_CORNERS_UNDER,
  },
  'Total Corners - 1st Half': {
    Over: Odds.FIRST_HALF_CORNERS_OVER,
    Under: Odds.FIRST_HALF_CORNERS_UNDER,
  },
  'Total Corners Odd/Even': {
    Odd: Odds.CORNERS_ODD,
    Even: Odds.CORNERS_EVEN,
  },
  'Match Odds': {
    1: Odds.WIN_NE_1,
    2: Odds.WIN_NE_2,
  },
  'Total Games - Set 1': {
    Over: Odds.FIRST_SET_GAMES_OVER,
    Under: Odds.FIRST_SET_GAMES_UNDER,
  },
  'Total Games': {
    Over: Odds.TOTAL_GAMES_OVER,
    Under: Odds.TOTAL_GAMES_UNDER,
  },
  'Home Team To Score - 1st Half': {
    Yes: Odds.E1_FIRST_HALF_GOALS_OVER.replace(':value', '0.5'),
    No: Odds.E1_FIRST_HALF_GOALS_UNDER.replace(':value', '0.5'),
  },
  'Away Team To Score - 1st Half': {
    Yes: Odds.E2_FIRST_HALF_GOALS_OVER.replace(':value', '0.5'),
    No: Odds.E2_FIRST_HALF_GOALS_UNDER.replace(':value', '0.5'),
  },
  // basket
  'Including Overtime': {
    1: Odds.WIN_NE_1,
    2: Odds.WIN_NE_2,
  },
  'Handicap - Including Overtime': {
    handicap: true,
    1: Odds.HANDICAP_1_INCLUDING_ALL,
    2: Odds.HANDICAP_2_INCLUDING_ALL,
  },
  'Total Points - Including Overtime': {
    Over: Odds.POINTS_OVER_INCLUDING_ALL,
    Under: Odds.POINTS_UNDER_INCLUDING_ALL,
  },
  'Total Points by Home Team - Including Overtime': {
    Over: Odds.E1_POINTS_OVER_INCLUDING_ALL,
    Under: Odds.E1_POINTS_UNDER_INCLUDING_ALL,
  },
  'Total Points by Away Team - Including Overtime': {
    Over: Odds.E2_POINTS_OVER_INCLUDING_ALL,
    Under: Odds.E2_POINTS_UNDER_INCLUDING_ALL,
  },
  'To go into Overtime': {
    Yes: Odds.HAS_EXTRA_TIME_YES,
    No: Odds.HAS_EXTRA_TIME_NO,
  },
  'Double Chance - Result at end of Quarter 4': {
    '1X': Odds.FOURTH_QUARTER_WIN_1X,
    '12': Odds.FOURTH_QUARTER_WIN_12,
    'X2': Odds.FOURTH_QUARTER_WIN_2X,
  },
  'Total Points - 1st Half': {
    Over: Odds.FIRST_HALF_POINTS_OVER,
    Under: Odds.FIRST_HALF_POINTS_UNDER,
  },
  'Total Points - 2nd Half': {
    Over: Odds.SECOND_HALF_POINTS_OVER,
    Under: Odds.SECOND_HALF_POINTS_UNDER,
  },
  'Total Points - Quarter 1': {
    Over: Odds.FIRST_QUARTER_POINTS_OVER,
    Under: Odds.FIRST_QUARTER_POINTS_UNDER,
  },
  'Total Points - Quarter 2': {
    Over: Odds.SECOND_QUARTER_POINTS_OVER,
    Under: Odds.SECOND_QUARTER_POINTS_UNDER,
  },
  'Total Points - Quarter 3': {
    Over: Odds.THIRD_QUARTER_POINTS_OVER,
    Under: Odds.THIRD_QUARTER_POINTS_UNDER,
  },
  'Total Points - Quarter 4': {
    Over: Odds.FOURTH_QUARTER_POINTS_OVER,
    Under: Odds.FOURTH_QUARTER_POINTS_UNDER,
  },
  'Handicap - 2nd Half': {
    handicap: true,
    1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
    2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
  },
  'Handicap - Quarter 1': {
    handicap: true,
    1: Odds.FIRST_QUARTER_H1_,
    2: Odds.FIRST_QUARTER_H2_,
  },
  'Handicap - Quarter 2': {
    handicap: true,
    1: Odds.SECOND_QUARTER_H1_,
    2: Odds.SECOND_QUARTER_H2_,
  },
  'Handicap - Quarter 3': {
    handicap: true,
    1: Odds.THIRD_QUARTER_H1_,
    2: Odds.THIRD_QUARTER_H2_,
  },
  'Handicap - Quarter 4': {
    handicap: true,
    1: Odds.FOURTH_QUARTER_H1_,
    2: Odds.FOURTH_QUARTER_H2_,
  },
  'Handicap - 1st Half': {
    handicap: true,
    1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
    2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
  },
  'Draw No Bet - Quarter 1': {
    1: Odds.FIRST_QUARTER_H1_.replace(':value', '0'),
    2: Odds.FIRST_QUARTER_H2_.replace(':value', '0'),
  },
  'Draw No Bet - Quarter 2': {
    1: Odds.SECOND_QUARTER_H1_.replace(':value', '0'),
    2: Odds.SECOND_QUARTER_H2_.replace(':value', '0'),
  },
  'Draw No Bet - Quarter 3': {
    1: Odds.THIRD_QUARTER_H1_.replace(':value', '0'),
    2: Odds.THIRD_QUARTER_H2_.replace(':value', '0'),
  },
  'Draw No Bet - Quarter 4': {
    1: Odds.FOURTH_QUARTER_H1_.replace(':value', '0'),
    2: Odds.FOURTH_QUARTER_H2_.replace(':value', '0'),
  },
  '1st Half': {
    1: Odds.FIRST_HALF_WIN_1,
    X: Odds.FIRST_HALF_WIN_X,
    2: Odds.FIRST_HALF_WIN_2,
  },
  'Quarter 1': {
    1: Odds.FIRST_QUARTER_WIN_1,
    X: Odds.FIRST_QUARTER_WIN_X,
    2: Odds.FIRST_QUARTER_WIN_2,
  },
  'Quarter 2': {
    1: Odds.SECOND_QUARTER_WIN_1,
    X: Odds.SECOND_QUARTER_WIN_X,
    2: Odds.SECOND_QUARTER_WIN_2,
  },
  'Quarter 3': {
    1: Odds.THIRD_QUARTER_WIN_1,
    X: Odds.THIRD_QUARTER_WIN_X,
    2: Odds.THIRD_QUARTER_WIN_2,
  },
  'Quarter 4': {
    1: Odds.FOURTH_QUARTER_WIN_1,
    X: Odds.FOURTH_QUARTER_WIN_X,
    2: Odds.FOURTH_QUARTER_WIN_2,
  },
  'Double Chance - Quarter 2': {
    '1X': Odds.SECOND_QUARTER_WIN_1X,
    '12': Odds.SECOND_QUARTER_WIN_12,
    'X2': Odds.SECOND_QUARTER_WIN_2X,
  },
  'Double Chance - Quarter 4': {
    '1X': Odds.FOURTH_QUARTER_WIN_1X,
    '12': Odds.FOURTH_QUARTER_WIN_12,
    'X2': Odds.FOURTH_QUARTER_WIN_2X,
  },
  // american football
  'Total Points by Away Team - 1st Half': {
    Over: Odds.E1_FIRST_HALF_GOALS_OVER,
    Under: Odds.E1_FIRST_HALF_GOALS_UNDER,
  },
  // hockey
  'Match Odds - Regular Time': {
    '1': Odds.WIN_1,
    'X': Odds.WIN_X,
    '2': Odds.WIN_2,
  },
  'Total Goals - Regular Time': {
    Over: Odds.POINTS_OVER,
    Under: Odds.POINTS_UNDER,
  },
  'Total Goals by Away Team - Including Overtime and Penalty Shootout': {
    Over: Odds.E2_POINTS_OVER_INCLUDING_ALL,
    Under: Odds.E2_POINTS_UNDER_INCLUDING_ALL,
  },
  'Total Goals by Home Team - Including Overtime and Penalty Shootout': {
    Over: Odds.E1_POINTS_OVER_INCLUDING_ALL,
    Under: Odds.E1_POINTS_UNDER_INCLUDING_ALL,
  },
  'Total Goals by Away Team - Period 2': {
    Over: Odds.E2_SECOND_HALF_GOALS_OVER,
    Under: Odds.E2_SECOND_HALF_GOALS_UNDER,
  },
  'Total Goals - Period 1': {
    Over: Odds.FIRST_HALF_POINTS_OVER,
    Under: Odds.FIRST_HALF_POINTS_UNDER,
  },
  'Total Goals by Home Team - Period 2': {
    Over: Odds.E1_SECOND_HALF_GOALS_OVER,
    Under: Odds.E1_SECOND_HALF_GOALS_UNDER,
  },
  'Total Goals - Period 3': {
    Over: Odds.THIRD_HALF_GOALS_OVER,
    Under: Odds.THIRD_HALF_GOALS_UNDER,
  },
  'Handicap - Including Overtime and Penalty Shootout': {
    handicap: true,
    1: Odds.HANDICAP_1_INCLUDING_ALL,
    2: Odds.HANDICAP_2_INCLUDING_ALL,
  },
  'Total Goals by Home Team - Period 1': {
    Over: Odds.E1_FIRST_HALF_GOALS_OVER,
    Under: Odds.E1_FIRST_HALF_GOALS_UNDER,
  },
  'Total Goals - Including Overtime and Penalty Shootout': {
    Over: Odds.GOALS_OVER_INCLUDING_ALL,
    Under: Odds.GOALS_UNDER_INCLUDING_ALL,
  },
  'Total Goals by Away Team - Period 3': {
    Over: Odds.E2_THIRD_HALF_GOALS_OVER,
    Under: Odds.E2_THIRD_HALF_GOALS_UNDER,
  },
  'Including overtime and penalty shootout': {
    '1': Odds.WIN_NE_1,
    '2': Odds.WIN_NE_2,
  },
  'Total Goals by Away Team - Period 1': {
    Over: Odds.E2_FIRST_HALF_GOALS_OVER,
    Under: Odds.E2_FIRST_HALF_GOALS_UNDER,
  },
  'Both Teams To Score - Period 3': {
    Yes: Odds.THIRD_HALF_BOTH_TEAMS_SCORE_YES,
    No: Odds.THIRD_HALF_BOTH_TEAMS_SCORE_NO,
  },
  'Double Chance - Regular Time': {
    '1X': Odds.WIN_1X,
    '12': Odds.WIN_12,
    'X2': Odds.WIN_2X,
  },
  'Total Goals by Home Team - Regular Time': {
    Over: Odds.E1_GOALS_OVER,
    Under: Odds.E1_GOALS_UNDER,
  },
  'Draw No Bet - Regular Time': {
    '1': Odds.HANDICAP_1.replace(':value', '0'),
    '2': Odds.HANDICAP_2.replace(':value', '0'),
  },
  'Total Goals by Away Team - Regular Time': {
    Over: Odds.E2_GOALS_OVER,
    Under: Odds.E2_GOALS_UNDER,
  },
  'Total Goals - Period 2': {
    Over: Odds.SECOND_HALF_GOALS_OVER,
    Under: Odds.SECOND_HALF_GOALS_UNDER,
  },
  'Total Goals by Home Team - Period 3': {
    Over: Odds.E1_THIRD_HALF_GOALS_OVER,
    Under: Odds.E1_THIRD_HALF_GOALS_UNDER,
  },
  'Double Chance - Period 3': {
    '1X': Odds.THIRD_HALF_WIN_1X,
    '12': Odds.THIRD_HALF_WIN_12,
    'X2': Odds.THIRD_HALF_WIN_2X,
  },
  'Both Teams To Score - Period 2': {
    Yes: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
    No: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
  },
  'Double Chance - Period 1': {
    '1X': Odds.FIRST_HALF_WIN_1X,
    '12': Odds.FIRST_HALF_WIN_12,
    'X2': Odds.FIRST_HALF_WIN_2X,
  },
  'Draw No Bet - Period 2': {
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  'Draw No Bet - Period 1': {
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  'Draw No Bet - Period 3': {
    '1': Odds.THIRD_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.THIRD_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  'Handicap - Regular Time': {
    handicap: true,
    1: Odds.HANDICAP_1,
    2: Odds.HANDICAP_2,
  },
  'Both Teams To Score - Period 1': {
    Yes: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
    No: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
  },
};

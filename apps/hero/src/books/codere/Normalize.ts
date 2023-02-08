import Odds from '../../core/Odds';

export default {
  '1x2': {
    '1': Odds.WIN_1,
    'Empate': Odds.WIN_X,
    '2': Odds.WIN_2,
  },
  'más/menos total goles': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.GOALS_OVER,
      'under': Odds.GOALS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  'doble oportunidad': {
    '1 / Empate': Odds.WIN_1X,
    '1 / 2': Odds.WIN_12,
    'Empate / 2': Odds.WIN_2X,
  },
  'marcan ambos equipos': {
    'Sí': Odds.BOTH_TEAMS_SCORE_YES,
    'Si': Odds.BOTH_TEAMS_SCORE_YES,
    'No': Odds.BOTH_TEAMS_SCORE_NO,
  },
  'apuesta sin empate': {
    '1': Odds.AH1_.replace(':value', '0'),
    '2': Odds.AH2_.replace(':value', '0'),
  },
  '1x2 handicap': {
    '1 -1': Odds.EH1.replace(':value', '0:1'),
    '1 +1': Odds.EH1.replace(':value', '1:0'),
    '1 -2': Odds.EH1.replace(':value', '0:2'),
    '1 +2': Odds.EH1.replace(':value', '2:0'),
    '1 -3': Odds.EH1.replace(':value', '0:3'),
    '1 +3': Odds.EH1.replace(':value', '3:0'),
    '1 -4': Odds.EH1.replace(':value', '0:4'),
    '1 +4': Odds.EH1.replace(':value', '4:0'),
    'Empate (2 +1)': Odds.EHX.replace(':value', '0:1'),
    'Empate (2 +2)': Odds.EHX.replace(':value', '0:2'),
    'Empate (2 +3)': Odds.EHX.replace(':value', '0:3'),
    'Empate (2 +4)': Odds.EHX.replace(':value', '0:4'),
    'Empate (2 -1)': Odds.EHX.replace(':value', '1:0'),
    'Empate (2 -2)': Odds.EHX.replace(':value', '2:0'),
    'Empate (2 -3)': Odds.EHX.replace(':value', '3:0'),
    'Empate (2 -4)': Odds.EHX.replace(':value', '4:0'),
    'Empate (1 -1)': Odds.EHX.replace(':value', '0:1'),
    'Empate (1 -2)': Odds.EHX.replace(':value', '0:2'),
    'Empate (1 -3)': Odds.EHX.replace(':value', '0:3'),
    'Empate (1 -4)': Odds.EHX.replace(':value', '0:4'),
    'Empate (1 +1)': Odds.EHX.replace(':value', '1:0'),
    'Empate (1 +2)': Odds.EHX.replace(':value', '2:0'),
    'Empate (1 +3)': Odds.EHX.replace(':value', '3:0'),
    'Empate (1 +4)': Odds.EHX.replace(':value', '4:0'),
    '2 -1': Odds.EH2.replace(':value', '1:0'),
    '2 +1': Odds.EH2.replace(':value', '0:1'),
    '2 -2': Odds.EH2.replace(':value', '2:0'),
    '2 +2': Odds.EH2.replace(':value', '0:2'),
    '2 -3': Odds.EH2.replace(':value', '3:0'),
    '2 +3': Odds.EH2.replace(':value', '0:3'),
    '2 -4': Odds.EH2.replace(':value', '4:0'),
    '2 +4': Odds.EH2.replace(':value', '0:4'),
  },
  '1x2 al descanso': {
    '1': Odds.FIRST_HALF_WIN_1,
    'Empate': Odds.FIRST_HALF_WIN_X,
    '2': Odds.FIRST_HALF_WIN_2,
  },
  'más/menos total goles 1ª parte': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.FIRST_HALF_GOALS_OVER,
      'under': Odds.FIRST_HALF_GOALS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  'doble oportunidad 1ª parte': {
    '1/ Empate': Odds.FIRST_HALF_WIN_1X,
    '1 / 2': Odds.FIRST_HALF_WIN_12,
    '2/ Empate': Odds.FIRST_HALF_WIN_2X,
  },
  'apuesta sin empate 1ª parte': {
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '1x2 handicap 1ª parte': {
    '1 -1': Odds.FIRST_HALF_EH1.replace(':value', '0:1'),
    '1 +1': Odds.FIRST_HALF_EH1.replace(':value', '1:0'),
    '1 -2': Odds.FIRST_HALF_EH1.replace(':value', '0:2'),
    '1 +2': Odds.FIRST_HALF_EH1.replace(':value', '2:0'),
    '1 -3': Odds.FIRST_HALF_EH1.replace(':value', '0:3'),
    '1 +3': Odds.FIRST_HALF_EH1.replace(':value', '3:0'),
    '1 -4': Odds.FIRST_HALF_EH1.replace(':value', '0:4'),
    '1 +4': Odds.FIRST_HALF_EH1.replace(':value', '4:0'),
    'Empate (2 +1)': Odds.FIRST_HALF_EHX.replace(':value', '0:1'),
    'Empate (2 +2)': Odds.FIRST_HALF_EHX.replace(':value', '0:2'),
    'Empate (2 +3)': Odds.FIRST_HALF_EHX.replace(':value', '0:3'),
    'Empate (2 +4)': Odds.FIRST_HALF_EHX.replace(':value', '0:4'),
    'Empate (2 -1)': Odds.FIRST_HALF_EHX.replace(':value', '1:0'),
    'Empate (2 -2)': Odds.FIRST_HALF_EHX.replace(':value', '2:0'),
    'Empate (2 -3)': Odds.FIRST_HALF_EHX.replace(':value', '3:0'),
    'Empate (2 -4)': Odds.FIRST_HALF_EHX.replace(':value', '4:0'),
    'Empate (1 -1)': Odds.FIRST_HALF_EHX.replace(':value', '0:1'),
    'Empate (1 -2)': Odds.FIRST_HALF_EHX.replace(':value', '0:2'),
    'Empate (1 -3)': Odds.FIRST_HALF_EHX.replace(':value', '0:3'),
    'Empate (1 -4)': Odds.FIRST_HALF_EHX.replace(':value', '0:4'),
    'Empate (1 +1)': Odds.FIRST_HALF_EHX.replace(':value', '1:0'),
    'Empate (1 +2)': Odds.FIRST_HALF_EHX.replace(':value', '2:0'),
    'Empate (1 +3)': Odds.FIRST_HALF_EHX.replace(':value', '3:0'),
    'Empate (1 +4)': Odds.FIRST_HALF_EHX.replace(':value', '4:0'),
    '2 -1': Odds.FIRST_HALF_EH2.replace(':value', '1:0'),
    '2 +1': Odds.FIRST_HALF_EH2.replace(':value', '0:1'),
    '2 -2': Odds.FIRST_HALF_EH2.replace(':value', '2:0'),
    '2 +2': Odds.FIRST_HALF_EH2.replace(':value', '0:2'),
    '2 -3': Odds.FIRST_HALF_EH2.replace(':value', '3:0'),
    '2 +3': Odds.FIRST_HALF_EH2.replace(':value', '0:3'),
    '2 -4': Odds.FIRST_HALF_EH2.replace(':value', '4:0'),
    '2 +4': Odds.FIRST_HALF_EH2.replace(':value', '0:4'),
  },
  'marcan ambos equipos 1ª parte': {
    'Sí': Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
    'Si': Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
    'No': Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
  },
  'par/impar total goles 1ª parte': {
    'Impar': Odds.FIRST_HALF_GOALS_ODD,
    'Par': Odds.FIRST_HALF_GOALS_EVEN,
  },
  '1x2 2ª parte': {
    '1': Odds.SECOND_HALF_WIN_1,
    'Empate': Odds.SECOND_HALF_WIN_X,
    '2': Odds.SECOND_HALF_WIN_2,
  },
  'par/impar total goles': {
    'Impar': Odds.GOALS_ODD,
    'Par': Odds.GOALS_EVEN,
  },
  'total de córner más/menos': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.CORNERS_TOTAL_OVER,
      'under': Odds.CORNERS_TOTAL_UNDER,
    },
    replace: true,
    over_under: true,
  },
  // tennis
  'ganador del partido': {
    '1': Odds.WIN_NE_1,
    '2': Odds.WIN_NE_2,
  },
  'ganador 1º set': {
    '1': Odds.FIRST_SET_WIN_1,
    '2': Odds.FIRST_SET_WIN_2,
  },
  'ganador 2º set': {
    '1': Odds.SECOND_SET_WIN_1,
    '2': Odds.SECOND_SET_WIN_2,
  },
  // BASKETBALL
  'hándicap': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      '1': Odds.HANDICAP_1,
      '2': Odds.HANDICAP_2,
    },
    replace: true,
  },
  'más/menos puntos totales': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.POINTS_OVER,
      'under': Odds.POINTS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  '2 equipo visitante total de puntos más/menos': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.E2_POINTS_OVER,
      'under': Odds.E2_POINTS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  '1 equipo local total de puntos más/menos': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.E1_POINTS_OVER,
      'under': Odds.E1_POINTS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  // American football
  'total de puntos más/menos': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.E2_POINTS_OVER,
      'under': Odds.E2_POINTS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  'ganador 1ª mitad (sin empate)': {
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  'hándicap 1ª mitad': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
      '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
    },
    replace: true,
  },
  'total de puntos 1ª mitad': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.FIRST_HALF_POINTS_OVER,
      'under': Odds.FIRST_HALF_POINTS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  'ganador 1º cuarto (sin empate)': {
    '1': Odds.FIRST_QUARTER_H1_.replace(':value', '0'),
    '2': Odds.FIRST_QUARTER_H2_.replace(':value', '0'),
  },
  'hándicap 1º cuarto': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      '1': Odds.FIRST_QUARTER_H1_,
      '2': Odds.FIRST_QUARTER_H2_,
    },
    replace: true,
  },
  'total de puntos 1º cuarto': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.FIRST_QUARTER_POINTS_OVER,
      'under': Odds.FIRST_QUARTER_POINTS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  // HOCKEY
  '1x2 resultado del partido': {
    '1': Odds.WIN_1,
    'Empate': Odds.WIN_X,
    '2': Odds.WIN_2,
  },
  'handicap (prórroga incluida)': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      '1': Odds.HANDICAP_1_INCLUDING_ALL,
      '2': Odds.HANDICAP_2_INCLUDING_ALL,
    },
    replace: true,
  },
  'más/menos total goles (no incluye prórroga / tanda de penaltis)': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.GOALS_OVER,
      'under': Odds.GOALS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  'ganador 1er periodo (sin empate)': {
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '1x2 1º periodo': {
    '1': Odds.FIRST_HALF_WIN_1,
    'Empate': Odds.FIRST_HALF_WIN_X,
    '2': Odds.FIRST_HALF_WIN_2,
  },
  '1º periodo total de goles': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.FIRST_HALF_GOALS_OVER,
      'under': Odds.FIRST_HALF_GOALS_UNDER,
    },
    replace: true,
    over_under: true,
  },
  'ganador 2º periodo (sin empate)': {
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '1x2 2º periodo': {
    '1': Odds.SECOND_HALF_WIN_1,
    'Empate': Odds.SECOND_HALF_WIN_X,
    '2': Odds.SECOND_HALF_WIN_2,
  },
  '2º periodo total de goles': {
    regexp: '([0-9]*[.])?[0-9]+',
    items: {
      'over': Odds.SECOND_HALF_POINTS_OVER,
      'under': Odds.SECOND_HALF_POINTS_UNDER,
    },
    replace: true,
    over_under: true,
  },
};

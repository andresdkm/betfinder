import Odds from '../../core/Odds';

export default {
  'Ganador': {
    '1': Odds.WIN_1,
    'Empate': Odds.WIN_X,
    '2': Odds.WIN_2,
  },
  'Total Goles - Más / Menos': {
    'Más de': Odds.GOALS_OVER,
    'Menos de': Odds.GOALS_UNDER,
  },
  'Ambos equipos marcan': {
    'Si': Odds.BOTH_TEAMS_SCORE_YES,
    'No': Odds.BOTH_TEAMS_SCORE_NO,
  },
  'Doble Oportunidad': {
    '1X': Odds.WIN_1X,
    '12': Odds.WIN_12,
    'X2': Odds.WIN_2X,
  },
  'Ganador con Handicap': {
    'european': true,
    '1': Odds.EH1,
    'Empate': Odds.EHX,
    '2': Odds.EH2,
    'oti': {
      '1': Odds.AH1_,
      '2': Odds.AH2_,
    },
  },
  'Empate, apuesta no válida': {
    '1': Odds.AH1_.replace(':value', '0'),
    '2': Odds.AH2_.replace(':value', '0'),
  },
  '¿Que equipo anotará?': {
    'Ambos': Odds.BOTH_TEAMS_SCORE_YES,
  },
  '1ª Tiempo - Ganador con Handicap Asiático': {
    'asian': true,
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
  },
  'Ganador con Handicap Asiático': {
    'asian': true,
    '1': Odds.AH1_,
    '2': Odds.AH2_,
  },
  '1ª Tiempo - Goles (Más / Menos) - Línea Asiática': {
    'Más de': Odds.FIRST_HALF_GOALS_OVER,
    'Menos de': Odds.FIRST_HALF_GOALS_UNDER,
  },
  'Total Goles (Más / Menos) - Línea Asiática': {
    'Más de': Odds.GOALS_OVER,
    'Menos de': Odds.GOALS_UNDER,
  },
  '2ª Tiempo - Ganador con Hándicap Asiático': {
    'asian': true,
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
  },
  '2ª Tiempo - Goles (Más / Menos) - Línea Asiática': {
    'Más de': Odds.SECOND_HALF_GOALS_OVER,
    'Menos de': Odds.SECOND_HALF_GOALS_UNDER,
  },
  '1ª Tiempo - Ganador (1-X-2)': {
    '1': Odds.FIRST_HALF_WIN_1,
    'Empate': Odds.FIRST_HALF_WIN_X,
    '2': Odds.FIRST_HALF_WIN_2,
  },
  '1ª Tiempo - Goles - Más / Menos': {
    'Más de': Odds.FIRST_HALF_GOALS_OVER,
    'Menos de': Odds.FIRST_HALF_GOALS_UNDER,
  },
  '1ª Tiempo - Doble Oportunidad': {
    '1X': Odds.FIRST_HALF_WIN_1X,
    '12': Odds.FIRST_HALF_WIN_12,
    'X2': Odds.FIRST_HALF_WIN_2X,
  },
  '1ª Tiempo- Empate, apuesta no válida': {
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '1ª Tiempo - Ambos equipos marcan': {
    'Si': Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
    'No': Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
  },
  '1ª Tiempo - Ganador con Handicap': {
    'asian': true,
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
  },
  '1ª Tiempo - Goles equipo local - Más / Menos': {
    'Más de': Odds.E1_FIRST_HALF_GOALS_OVER,
    'Menos de': Odds.E1_FIRST_HALF_GOALS_UNDER,
  },
  '1ª Tiempo - Goles equipo visitante - Más / Menos': {
    'Más de': Odds.E2_FIRST_HALF_GOALS_OVER,
    'Menos de': Odds.E2_FIRST_HALF_GOALS_UNDER,
  },
  '1ª Tiempo - Goles (Par / Impar)': {
    'Impar': Odds.FIRST_HALF_GOALS_ODD,
    'Par': Odds.FIRST_HALF_GOALS_EVEN,
  },
  '2ª Tiempo - Ganador (1-X-2)': {
    '1': Odds.SECOND_HALF_WIN_1,
    'Empate': Odds.SECOND_HALF_WIN_X,
    '2': Odds.SECOND_HALF_WIN_2,
  },
  '2ª Tiempo - Goles - Más / Menos': {
    'Más de': Odds.SECOND_HALF_GOALS_OVER,
    'Menos de': Odds.SECOND_HALF_GOALS_UNDER,
  },
  '2ª Tiempo - Doble oportunidad': {
    '1X': Odds.SECOND_HALF_WIN_1X,
    '12': Odds.SECOND_HALF_WIN_12,
    'X2': Odds.SECOND_HALF_WIN_2X,
  },
  '2ª Tiempo - Empate, apuesta no valida': {
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '2ª Tiempo - Ganador con Handicap': {
    'asian': true,
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
  },
  '2ª Tiempo - Goles equipo local - Más / Menos': {
    'Más de': Odds.E1_SECOND_HALF_GOALS_OVER,
    'Menos de': Odds.E1_SECOND_HALF_GOALS_UNDER,
  },
  '2ª Tiempo - Goles equipo visitante - Más / Menos': {
    'Más de': Odds.E2_SECOND_HALF_GOALS_OVER,
    'Menos de': Odds.E2_SECOND_HALF_GOALS_UNDER,
  },
  '2ª Tiempo - Goles (Par / Impar)': {
    'Impar': Odds.GOALS_ODD,
    'Par': Odds.GOALS_EVEN,
  },
  '2ª Tiempo - Ambos equipos marcan': {
    'Si': Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
    'No': Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
  },
  'Total Tiros de esquina - Más de / Menos de': {
    'Más de': Odds.CORNERS_TOTAL_OVER,
    'Menos de': Odds.CORNERS_TOTAL_UNDER,
  },
  '1ª Tiempo- Tiros de esquina ( Más de / Menos de )': {
    'Más de': Odds.FIRST_HALF_CORNERS_OVER,
    'Menos de': Odds.FIRST_HALF_CORNERS_UNDER,
  },
  'Tiros de esquina (Par / impar)': {
    'Impar': Odds.CORNERS_ODD,
    'Par': Odds.CORNERS_EVEN,
  },
  'Ganador con Handicap de Tiros de esquina': {
    'asian': true,
    '1': Odds.CORNERS_HANDICAP_1,
    '2': Odds.CORNERS_HANDICAP_2,
  },
  '1ª Tiempo - Ganador con Handicap de Tiros de esquina': {
    'asian': true,
    '1': Odds.FIRST_HALF_CORNERS__HANDICAP_1,
    '2': Odds.FIRST_HALF_CORNERS__HANDICAP_2,
  },
  'Total de tarjetas en el partido – ( Más de / Menos de )': {
    'Más de': Odds.YELLOW_CARDS_TOTAL_OVER,
    'Menos de': Odds.YELLOW_CARDS_TOTAL_UNDER,
  },
  '1ª Tiempo - Total de tarjetas ( Más de / Menos de )': {
    'Más de': Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_OVER,
    'Menos de': Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_UNDER,
  },
  'Tarjeta Roja en el partido': {
    'Si': Odds.RED_CARD_YES,
    'No': Odds.RED_CARD_NO,
  },
  'Equipo Local - Tarjeta Roja en el partido': {
    'Si': Odds.E1_RED_CARD_YES,
    'No': Odds.E1_RED_CARD_NO,
  },
  'Equipo Visitante - Tarjeta Roja en el partido': {
    'Si': Odds.E2_RED_CARD_YES,
    'No': Odds.E2_RED_CARD_NO,
  },
  'Total Goles (Par / Impar)': {
    'Impar': Odds.GOALS_ODD,
    'Par': Odds.GOALS_EVEN,
  },
  'Ganador (1-X-2)': {
    '1': Odds.WIN_1,
    'Empate': Odds.WIN_X,
    '2': Odds.WIN_2,
  },
  'Ganador del Partido': {
    '1': Odds.WIN_NE_1,
    '2': Odds.WIN_NE_2,
  },
  'Ganador con Handicap - Juegos Ganados': {
    'asian': true,
    '1': Odds.HANDICAP_GAMES_1,
    '2': Odds.HANDICAP_GAMES_2,
  },
  'Set 1 - Ganador': {
    '1': Odds.FIRST_SET_WIN_1,
    '2': Odds.FIRST_SET_WIN_2,
  },
  'Total Juegos - Par / Impar': {
    'Impar': Odds.GAMES_ODD,
    'Par': Odds.GAMES_EVEN,
  },
  'Ganador con Handicap - Sets': {
    'asian': true,
    '1': Odds.HANDICAP_SET_1,
    '2': Odds.HANDICAP_SET_2,
  },
  'Total de Juegos - Más / Menos': {
    'Más de': Odds.TOTAL_GAMES_OVER,
    'Menos de': Odds.TOTAL_GAMES_UNDER,
  },
  'Set 1 - Total de Juegos (Más / Menos)': {
    'Más de': Odds.FIRST_SET_GAMES_OVER,
    'Menos de': Odds.FIRST_SET_GAMES_UNDER,
  },
  'Jugador 2 - Total de Juegos (Más / Menos)': {
    'Más de': Odds.E2_TOTAL_GAMES_OVER,
    'Menos de': Odds.E2_TOTAL_GAMES_UNDER,
  },
  'Jugador 1 - Total de Juegos (Más / Menos)': {
    'Más de': Odds.E1_TOTAL_GAMES_OVER,
    'Menos de': Odds.E1_TOTAL_GAMES_UNDER,
  },
  'Set 2 - Ganador': {
    '1': Odds.SECOND_SET_WIN_1,
    '2': Odds.SECOND_SET_WIN_2,
  },
  'Set 1 - Ganador con Hándicap - Juegos Ganados': {
    'asian': true,
    '1': Odds.FIRST_SET_HANDICAP_GAMES_1,
    '2': Odds.FIRST_SET_HANDICAP_GAMES_2,
  },
  'Ganador con Handicap (1-X-2)': {
    '1': Odds.EH1,
    'Empate': Odds.EHX,
    '2': Odds.EH2,
  },
  '¿Habrá prórroga? Si / No': {
    'Si': Odds.HAS_EXTRA_TIME_YES,
    'No': Odds.HAS_EXTRA_TIME_NO,
  },
  'Total Puntos (Par / Impar)': {
    'Impar': Odds.POINTS_ODD,
    'Par': Odds.POINTS_EVEN,
  },
  'Equipo Local - Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.E1_POINTS_OVER,
    'Menos de': Odds.E1_POINTS_UNDER,
  },
  'Equipo Visitante - Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.E2_POINTS_OVER,
    'Menos de': Odds.E2_POINTS_UNDER,
  },
  '1ª Tiempo - Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.FIRST_HALF_POINTS_OVER,
    'Menos de': Odds.FIRST_HALF_POINTS_UNDER,
  },
  'Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.POINTS_OVER,
    'Menos de': Odds.POINTS_UNDER,
  },
  '1ª Tiempo - Ganador': {
    '1': Odds.FIRST_HALF_WIN_1,
    '2': Odds.FIRST_HALF_WIN_2,
  },
  '1ª Tiempo - Total Puntos (Par / Impar)': {
    'Impar': Odds.FIRST_HALF_POINTS_ODD,
    'Par': Odds.FIRST_HALF_POINTS_EVEN,
  },
  '1ª Tiempo - Empate, apuesta no válida': {
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '2ª Tiempo - Empate, apuesta no válida': {
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '2ª Tiempo - Total Puntos (Par / Impar)': {
    'Impar': Odds.SECOND_HALF_POINTS_ODD,
    'Par': Odds.SECOND_HALF_POINTS_EVEN,
  },
  '1º Cuarto - Empate, apuesta no válida': {
    '1': Odds.FIRST_QUARTER_H1_.replace(':value', '0'),
    '2': Odds.FIRST_QUARTER_H2_.replace(':value', '0'),
  },
  '1º Cuarto - Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.FIRST_QUARTER_POINTS_OVER,
    'Menos de': Odds.FIRST_QUARTER_POINTS_UNDER,
  },
  '2º Cuarto - Empate, apuesta no válida': {
    '1': Odds.SECOND_QUARTER_H1_.replace(':value', '0'),
    '2': Odds.SECOND_QUARTER_H2_.replace(':value', '0'),
  },
  '2º Cuarto - Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.SECOND_QUARTER_POINTS_OVER,
    'Menos de': Odds.SECOND_QUARTER_POINTS_UNDER,
  },
  '3º Cuarto - Empate, apuesta no válida': {
    '1': Odds.THIRD_QUARTER_H1_.replace(':value', '0'),
    '2': Odds.THIRD_QUARTER_H2_.replace(':value', '0'),
  },
  '3º Cuarto - Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.THIRD_QUARTER_POINTS_OVER,
    'Menos de': Odds.THIRD_QUARTER_POINTS_UNDER,
  },
  '4º Cuarto - Empate, apuesta no válida': {
    '1': Odds.FOURTH_QUARTER_H1_.replace(':value', '0'),
    '2': Odds.FOURTH_QUARTER_H2_.replace(':value', '0'),
  },
  '4º Cuarto - Total Puntos ( Más de / Menos de )': {
    'Más de': Odds.FOURTH_QUARTER_POINTS_OVER,
    'Menos de': Odds.FOURTH_QUARTER_POINTS_UNDER,
  },
  '1º Cuarto - Total Puntos (Par / Impar)': {
    'Impar': Odds.FIRST_QUARTER_ODD,
    'Par': Odds.FIRST_QUARTER_EVEN,
  },
  '2º Cuarto - Total Puntos (Par / Impar)': {
    'Impar': Odds.SECOND_QUARTER_ODD,
    'Par': Odds.SECOND_QUARTER_EVEN,
  },
  '3º Cuarto - Total - Impar / Par puntos': {
    'Impar': Odds.THIRD_QUARTER_ODD,
    'Par': Odds.THIRD_QUARTER_EVEN,
  },
  '4º Cuarto - Total - Impar / Par puntos': {
    'Impar': Odds.FOURTH_QUARTER_ODD,
    'Par': Odds.FOURTH_QUARTER_EVEN,
  },
  '1º Cuarto - Ganador (1-X-2)': {
    '1': Odds.FIRST_QUARTER_WIN_1,
    'Empate': Odds.FIRST_QUARTER_WIN_X,
    '2': Odds.FIRST_QUARTER_WIN_2,
  },
  '2º Cuarto - Ganador (1-X-2)': {
    '1': Odds.SECOND_QUARTER_WIN_1,
    'Empate': Odds.SECOND_QUARTER_WIN_X,
    '2': Odds.SECOND_QUARTER_WIN_2,
  },
  '3º Cuarto - Ganador (1-X-2)': {
    '1': Odds.THIRD_QUARTER_WIN_1,
    'Empate': Odds.THIRD_QUARTER_WIN_X,
    '2': Odds.THIRD_QUARTER_WIN_2,
  },
  '4º Cuarto - Ganador (1-X-2)': {
    '1': Odds.FOURTH_QUARTER_WIN_1,
    'Empate': Odds.FOURTH_QUARTER_WIN_X,
    '2': Odds.FOURTH_QUARTER_WIN_2,
  },
  '1º Cuarto - Ganador con Handicap': {
    'asian': true,
    '1': Odds.FIRST_QUARTER_H1_,
    '2': Odds.FIRST_QUARTER_H2_,
  },
  '2º Cuarto - Ganador con Handicap': {
    'asian': true,
    '1': Odds.SECOND_QUARTER_H1_,
    '2': Odds.SECOND_QUARTER_H2_,
  },
  '3º Cuarto - Ganador con Hándicap': {
    'asian': true,
    '1': Odds.THIRD_QUARTER_H1_,
    '2': Odds.THIRD_QUARTER_H2_,
  },
  '4º Cuarto - Ganador con Hándicap': {
    'asian': true,
    '1': Odds.FOURTH_QUARTER_H1_,
    '2': Odds.FOURTH_QUARTER_H2_,
  },
  'Ganador con Handicap Asiatico (Linea Principál)': {
    'asian': true,
    '1': Odds.HANDICAP_1,
    '2': Odds.HANDICAP_2,
  },
  //NFL
  '1° Tiempo - Ganador (1-X-2)': {
    '1': Odds.FIRST_HALF_WIN_1,
    'Empate': Odds.FIRST_HALF_WIN_X,
    '2': Odds.FIRST_HALF_WIN_2,
  },
  'Total Puntos ( Mas de / Menos de )': {
    'Más de': Odds.POINTS_OVER,
    'Menos de': Odds.POINTS_UNDER,
  },
  'Total Puntos ( Mas de / Menos de ) (incl. Prorroga)': {
    'Más de': Odds.POINTS_OVER_INCLUDING_ALL,
    'Menos de': Odds.POINTS_UNDER_INCLUDING_ALL,
  },
  'Ganador con Handicap (incl. Prorroga)': {
    'asian': true,
    '1': Odds.HANDICAP_1_INCLUDING_ALL,
    '2': Odds.HANDICAP_2_INCLUDING_ALL,
  },
  'Prorroga Si/No': {
    'Si': Odds.HAS_EXTRA_TIME_YES,
    'No': Odds.HAS_EXTRA_TIME_NO,
  },
  'Total Puntos Asiatico ( Mas de / Menos de )': {
    'Más de': Odds.POINTS_OVER,
    'Menos de': Odds.POINTS_UNDER,
  },
  'Equipo Visitante - Total Puntos ( Mas de / Menos de )': {
    'Más de': Odds.E2_POINTS_OVER,
    'Menos de': Odds.E2_POINTS_UNDER,
  },
  'Equipo Local - Total Puntos ( Mas de / Menos de )': {
    'Más de': Odds.E2_POINTS_OVER,
    'Menos de': Odds.E2_POINTS_UNDER,
  },
  'Total - Impar / Par (Incl. Prorroga)': {
    'Impar': Odds.POINTS_ODD_INCLUDING_ALL,
    'Par': Odds.POINTS_EVEN_INCLUDING_ALL,
  },
  'Total - Impar / Par': {
    'Impar': Odds.POINTS_ODD,
    'Par': Odds.POINTS_EVEN,
  },
  '1° Tiempo - Total Puntos (Par / Impar)': {
    'Impar': Odds.FIRST_HALF_POINTS_OVER,
    'Par': Odds.FIRST_HALF_POINTS_UNDER,
  },
  '1° Tiempo - Ganador con Handicap Asiatico': {
    'asian': true,
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
  },
  '2° Tiempo - Ganador con Handicap (incl. Prorroga)': {
    'asian': true,
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_1_,
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_2_,
  },
  '2° Tiempo - Total Puntos ( Mas de / Menos de ) (incl. Prorroga)': {
    '1': Odds.SECOND_HALF_POINTS_INCLUDE_ALL_OVER,
    '2': Odds.SECOND_HALF_POINTS_INCLUDE_ALL_UNDER,
  },
  '1° Tiempo - Empate apuesta no valida': {
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
  },
  '2° Tiempo - Ganador (1-X-2)': {
    '1': Odds.SECOND_HALF_WIN_1,
    'Empate': Odds.SECOND_HALF_WIN_X,
    '2': Odds.SECOND_HALF_WIN_2,
  },
  '2° Tiempo - Ganador con Handicap Asiatico': {
    'asian': true,
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
  },
  '2° Tiempo - Total Puntos ( Mas de / Menos de )': {
    'Más de': Odds.SECOND_HALF_POINTS_OVER,
    'Menos de': Odds.SECOND_HALF_POINTS_UNDER,
  },
  '1° Cuarto - Ganador (1-X-2)': {
    '1': Odds.FIRST_QUARTER_WIN_1,
    'Empate': Odds.FIRST_QUARTER_WIN_X,
    '2': Odds.FIRST_QUARTER_WIN_2,
  },
  '2° Cuarto - Ganador (1-X-2)': {
    '1': Odds.SECOND_QUARTER_WIN_1,
    'Empate': Odds.SECOND_QUARTER_WIN_X,
    '2': Odds.SECOND_QUARTER_WIN_2,
  },
  '3° Cuarto - Ganador (1-X-2)': {
    '1': Odds.THIRD_QUARTER_WIN_1,
    'Empate': Odds.THIRD_QUARTER_WIN_X,
    '2': Odds.THIRD_QUARTER_WIN_2,
  },
  '4° Cuarto - Ganador (1-X-2)': {
    '1': Odds.FOURTH_QUARTER_WIN_1,
    'Empate': Odds.FOURTH_QUARTER_WIN_X,
    '2': Odds.FOURTH_QUARTER_WIN_2,
  },
  '1° Cuarto - Empate apuesta no valida': {
    '1': Odds.FIRST_QUARTER_H1_.replace(':value', '0'),
    '2': Odds.FIRST_QUARTER_H2_.replace(':value', '0'),
  },
  '2° Cuarto - Empate apuesta no valida': {
    '1': Odds.SECOND_QUARTER_H1_.replace(':value', '0'),
    '2': Odds.SECOND_QUARTER_H2_.replace(':value', '0'),
  },
  'Equipo visitante - Goles (Más / Menos)': {
    'Más de': Odds.E2_GOALS_OVER,
    'Menos de': Odds.E2_GOALS_UNDER,
  },
  'Equipo local - Goles (Más / Menos)': {
    'Más de': Odds.E1_GOALS_OVER,
    'Menos de': Odds.E1_GOALS_UNDER,
  },
  'Equipo que sacará más Tiros de esquina (1-X-2)': {
    '1': Odds.CORNERS_WIN_1,
    'Empate': Odds.CORNERS_WIN_X,
    '2': Odds.CORNERS_WIN_2,
  },
  '1ª Tiempo - Tiros de esquina (Par / impar)':{
    'Impar': Odds.FIRST_HALF_CORNERS_ODD,
    'Par': Odds.FIRST_HALF_CORNERS_EVEN,
  },
  'Equipo que verá más tarjetas en el partido (1-X-2)':{
    '1': Odds.YELLOW_CARDS_WIN_1,
    'Empate': Odds.YELLOW_CARDS_WIN_X,
    '2': Odds.YELLOW_CARDS_WIN_2,
  },
  'Ganador (incl. prórroga)':{
    '1': Odds.WIN_NE_1,
    '2': Odds.WIN_NE_2,
  },
  'Total Goles (Par / Impar) - (incl. prórroga y penales)':{
    'Más de': Odds.GOALS_OVER_INCLUDING_ALL,
    'Menos de': Odds.GOALS_UNDER_INCLUDING_ALL,
  },
  'Total Goles - Más / Menos - (incl. prórroga)':{
    'Más de': Odds.GOALS_OVER_INCLUDING_ALL,
    'Menos de': Odds.GOALS_UNDER_INCLUDING_ALL,
  },
  'Total Goles - Más / Menos (Incl. prórroga)':{
    'Más de': Odds.GOALS_OVER_INCLUDING_ALL,
    'Menos de': Odds.GOALS_UNDER_INCLUDING_ALL,
  },
  '1º Periodo - Goles - Más / Menos':{
    'Más de': Odds.FIRST_HALF_GOALS_OVER,
    'Menos de': Odds.FIRST_HALF_GOALS_UNDER,
  },
  '2º Periodo - Goles - Más / Menos':{
    'Más de': Odds.SECOND_HALF_GOALS_OVER,
    'Menos de': Odds.SECOND_HALF_GOALS_UNDER,
  },
  '3º Periodo - Goles - Más / Menos':{
    'Más de': Odds.THIRD_HALF_GOALS_OVER,
    'Menos de': Odds.THIRD_HALF_GOALS_UNDER,
  },
  'Equipo visitante - Goles - Más / menos':{
    'Más de': Odds.E2_GOALS_OVER,
    'Menos de': Odds.E2_GOALS_UNDER,
  },
  'Equipo local - Goles - Más / menos':{
    'Más de': Odds.E1_GOALS_OVER,
    'Menos de': Odds.E1_GOALS_UNDER,
  },
  'Ganador con Handicap (incl. prórroga)':{
    'asian': true,
    '1': Odds.HANDICAP_1_INCLUDING_ALL,
    '2': Odds.HANDICAP_2_INCLUDING_ALL,
  },
  '1º Periodo - Ganador con Handicap':{
    'asian': true,
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
  },
  '2º Período - Ganador con Handicap':{
    'asian': true,
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
  },
  '3º Periodo - Ganador con Hándicap':{
    '1': Odds.THIRD_HALF_ASIAN_HANDICAP_1_,
    '2': Odds.THIRD_HALF_ASIAN_HANDICAP_2_,
  },
  '1º Periodo - Ganador (1-X-2)':{
    '1': Odds.FIRST_HALF_WIN_1,
    'Empate': Odds.FIRST_HALF_WIN_X,
    '2': Odds.FIRST_HALF_WIN_2,
  },
  '2º Periodo - Ganador (1-X-2)':{
    '1': Odds.SECOND_HALF_WIN_1,
    'Empate': Odds.SECOND_HALF_WIN_X,
    '2': Odds.SECOND_HALF_WIN_2,
  },
  '3º Periodo - Ganador (1-X-2)':{
    '1': Odds.THIRD_HALF_WIN_1,
    'Empate': Odds.THIRD_HALF_WIN_X,
    '2': Odds.THIRD_HALF_WIN_2,
  },
  '1º Periodo - Doble Oportunidad':{
    '1X': Odds.FIRST_HALF_WIN_1X,
    '12': Odds.FIRST_HALF_WIN_12,
    'X2': Odds.FIRST_HALF_WIN_2X,
  },
  '2º periodo - Doble oportunidad':{
    '1X': Odds.SECOND_HALF_WIN_1X,
    '12': Odds.SECOND_HALF_WIN_12,
    'X2': Odds.SECOND_HALF_WIN_2X,
  },
  '3º Periodo - Doble Oportunidad':{
    '1X': Odds.THIRD_HALF_WIN_1X,
    '12': Odds.THIRD_HALF_WIN_12,
    'X2': Odds.THIRD_HALF_WIN_2X,
  },
  '1º Periodo - Total Goles (Par / Impar)':{
    'Impar': Odds.FIRST_HALF_POINTS_ODD,
    'Par': Odds.FIRST_HALF_POINTS_EVEN,
  },
  '2º Periodo - Total Goles (Par / Impar)':{
    'Impar': Odds.SECOND_HALF_POINTS_ODD,
    'Par': Odds.SECOND_HALF_POINTS_EVEN,
  },
  '3º Periodo - Total Goles (Par / Impar)':{
    'Impar': Odds.THIRD_HALF_GOALS_ODD,
    'Par': Odds.THIRD_HALF_GOALS_EVEN,
  },
  '1º Periodo - Empate, apuesta no válida':{
    '1': Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value','0'),
    '2': Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value','0'),
  },
  '2º Periodo - Empate, apuesta no válida':{
    '1': Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value','0'),
    '2': Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value','0'),
  },
  '3º Periodo - Empate, Apuesta no válida':{
    '1': Odds.THIRD_HALF_ASIAN_HANDICAP_1_.replace(':value','0'),
    '2': Odds.THIRD_HALF_ASIAN_HANDICAP_2_.replace(':value','0'),
  },
  '1º Periodo - Ambos equipos marcan':{
    'Si': Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
    'No': Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
  },
  '2º Periodo - Ambos equipos marcan':{
    'Si': Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
    'No': Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
  },
  '3º Periodo - Ambos equipos marcan':{
    'Si': Odds.THIRD_HALF_BOTH_TEAMS_SCORE_YES,
    'No': Odds.THIRD_HALF_BOTH_TEAMS_SCORE_NO,
  }


};

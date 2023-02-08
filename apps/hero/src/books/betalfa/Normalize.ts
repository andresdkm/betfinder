import Odds from '../../core/Odds';

export default {
    'Ganador': {
        1: Odds.WIN_1,
        Empate: Odds.WIN_X,
        2: Odds.WIN_2,
    },
    'Total Goles - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.GOALS_OVER,
            under: Odds.GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Ambos equipos marcan': {
        Si: Odds.BOTH_TEAMS_SCORE_YES,
        No: Odds.BOTH_TEAMS_SCORE_NO,
    },
    'Doble Oportunidad': {
        '1X': Odds.WIN_1X,
        '12': Odds.WIN_12,
        'X2': Odds.WIN_2X,
    },
    'Ganador con Handicap': {
        '1 (0:1)': Odds.EH1.replace(':value', '0:1'),
        '1 (0:2)': Odds.EH1.replace(':value', '0:2'),
        '1 (0:3)': Odds.EH1.replace(':value', '0:3'),
        '1 (0:4)': Odds.EH1.replace(':value', '0:4'),
        '1 (1:0)': Odds.EH1.replace(':value', '1:0'),
        '1 (2:0)': Odds.EH1.replace(':value', '2:0'),
        '1 (3:0)': Odds.EH1.replace(':value', '3:0'),
        '1 (4:0)': Odds.EH1.replace(':value', '4:0'),
        'Empate (0:4)': Odds.EHX.replace(':value', '0:4'),
        'Empate (0:3)': Odds.EHX.replace(':value', '0:3'),
        'Empate (0:1)': Odds.EHX.replace(':value', '0:1'),
        'Empate (0:2)': Odds.EHX.replace(':value', '0:2'),
        'Empate (1:0)': Odds.EHX.replace(':value', '1:0'),
        'Empate (2:0)': Odds.EHX.replace(':value', '2:0'),
        'Empate (3:0)': Odds.EHX.replace(':value', '3:0'),
        'Empate (4:0)': Odds.EHX.replace(':value', '4:0'),
        '2 (0:1)': Odds.EH2.replace(':value', '0:1'),
        '2 (0:2)': Odds.EH2.replace(':value', '0:2'),
        '2 (0:3)': Odds.EH2.replace(':value', '0:3'),
        '2 (0:4)': Odds.EH2.replace(':value', '0:4'),
        '2 (1:0)': Odds.EH2.replace(':value', '1:0'),
        '2 (2:0)': Odds.EH2.replace(':value', '2:0'),
        '2 (3:0)': Odds.EH2.replace(':value', '3:0'),
        '2 (4:0)': Odds.EH2.replace(':value', '4:0'),
        '1 (1.5)': Odds.HANDICAP_1.replace(':value', '+1.5'),
        '2 (-1.5)': Odds.HANDICAP_2.replace(':value', '-1.5'),
        '1 (-1.5)': Odds.HANDICAP_1.replace(':value', '-1.5'),
        '2 (1.5)': Odds.HANDICAP_2.replace(':value', '+1.5'),
        '1 (2.5)': Odds.HANDICAP_1.replace(':value', '+2.5'),
        '2 (-2.5)': Odds.HANDICAP_2.replace(':value', '-2.5'),
        '1 (-2.5)': Odds.HANDICAP_1.replace(':value', '-2.5'),
        '2 (2.5)': Odds.HANDICAP_2.replace(':value', '+2.5'),
        '1 (3.5)': Odds.HANDICAP_1.replace(':value', '+3.5'),
        '2 (-3.5)': Odds.HANDICAP_2.replace(':value', '-3.5'),
        '1 (-3.5)': Odds.HANDICAP_1.replace(':value', '-3.5'),
        '2 (3.5)': Odds.HANDICAP_2.replace(':value', '+3.5'),
        '1 (4.5)': Odds.HANDICAP_1.replace(':value', '+4.5'),
        '2 (-4.5)': Odds.HANDICAP_2.replace(':value', '-4.5'),
        '1 (-4.5)': Odds.HANDICAP_1.replace(':value', '-4.5'),
        '2 (4.5)': Odds.HANDICAP_2.replace(':value', '+4.5'),
        '1 (5.5)': Odds.HANDICAP_1.replace(':value', '+5.5'),
        '2 (-5.5)': Odds.HANDICAP_2.replace(':value', '-5.5'),
        '1 (-5.5)': Odds.HANDICAP_1.replace(':value', '-5.5'),
        '2 (5.5)': Odds.HANDICAP_2.replace(':value', '+5.5'),
        '1 (6.5)': Odds.HANDICAP_1.replace(':value', '+6.5'),
        '2 (-6.5)': Odds.HANDICAP_2.replace(':value', '-6.5'),
        '1 (-6.5)': Odds.HANDICAP_1.replace(':value', '-6.5'),
        '2 (6.5)': Odds.HANDICAP_2.replace(':value', '+6.5'),
        '1 (7.5)': Odds.HANDICAP_1.replace(':value', '+7.5'),
        '2 (-7.5)': Odds.HANDICAP_2.replace(':value', '-7.5'),
        '1 (-7.5)': Odds.HANDICAP_1.replace(':value', '-7.5'),
        '2 (7.5)': Odds.HANDICAP_2.replace(':value', '+7.5'),
        '1 (8.5)': Odds.HANDICAP_1.replace(':value', '+8.5'),
        '2 (-8.5)': Odds.HANDICAP_2.replace(':value', '-8.5'),
        '1 (-8.5)': Odds.HANDICAP_1.replace(':value', '-8.5'),
        '2 (8.5)': Odds.HANDICAP_2.replace(':value', '+8.5'),
        '1 (9.5)': Odds.HANDICAP_1.replace(':value', '+9.5'),
        '2 (-9.5)': Odds.HANDICAP_2.replace(':value', '-9.5'),
        '1 (-9.5)': Odds.HANDICAP_1.replace(':value', '-9.5'),
        '2 (9.5)': Odds.HANDICAP_2.replace(':value', '+9.5'),
        '1 (10.5)': Odds.HANDICAP_1.replace(':value', '+10.5'),
        '2 (-10.5)': Odds.HANDICAP_2.replace(':value', '-10.5'),
        '1 (-10.5)': Odds.HANDICAP_1.replace(':value', '-10.5'),
        '2 (10.5)': Odds.HANDICAP_2.replace(':value', '+10.5'),
        '1 (11.5)': Odds.HANDICAP_1.replace(':value', '+11.5'),
        '2 (-11.5)': Odds.HANDICAP_2.replace(':value', '-11.5'),
        '1 (-11.5)': Odds.HANDICAP_1.replace(':value', '-11.5'),
        '2 (11.5)': Odds.HANDICAP_2.replace(':value', '+11.5'),
        '1 (0)': Odds.HANDICAP_1.replace(':value', '0'),
        '2 (0)': Odds.HANDICAP_2.replace(':value', '0'),
    },
    'Empate, apuesta no válida': {
        1: Odds.AH1_.replace(':value', '0'),
        2: Odds.AH2_.replace(':value', '0'),
    },
    'Equipo visitante - Goles (Más / Menos)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_GOALS_OVER,
            under: Odds.E2_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Equipo local - Goles (Más / Menos)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_GOALS_OVER,
            under: Odds.E1_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Ganador con Handicap Asiático': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.AH1_,
            away: Odds.AH2_,
        },
        replace: true,
        asian: true,
    },
    '1ª Tiempo - Ganador con Handicap Asiático': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
            away: Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        asian: true,
    },
    '2ª Tiempo - Ganador con Hándicap Asiático': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
            away: Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        asian: true,
    },
    '1ª Tiempo - Ganador (1-X-2)': {
        '1': Odds.FIRST_HALF_WIN_1,
        'X' : Odds.FIRST_HALF_WIN_X,
        '2': Odds.FIRST_HALF_WIN_2,
    },
    '1° Tiempo - Ganador (1-X-2)': {
        '1': Odds.FIRST_HALF_WIN_1,
        'X' : Odds.FIRST_HALF_WIN_X,
        '2': Odds.FIRST_HALF_WIN_2,
    },
    '1ª Tiempo - Ganador': {
        1: Odds.FIRST_HALF_WIN_1,
        2: Odds.FIRST_HALF_WIN_2,
    },
    '1ª Tiempo - Goles - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_GOALS_OVER,
            under: Odds.FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ª Tiempo - Doble Oportunidad': {
        '1X': Odds.FIRST_HALF_WIN_1X,
        '12': Odds.FIRST_HALF_WIN_12,
        'X2': Odds.FIRST_HALF_WIN_2X,
    },
    '1ª Tiempo- Empate, apuesta no válida': {
        1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '1ª Tiempo - Ambos equipos marcan': {
        Si: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
        No: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
    },
    '1ª Tiempo - Goles equipo local - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_FIRST_HALF_GOALS_OVER,
            under: Odds.E1_FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ª Tiempo - Goles equipo visitante - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_FIRST_HALF_GOALS_OVER,
            under: Odds.E2_FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ª Tiempo - Goles (Par / Impar)': {
        Impar: Odds.FIRST_HALF_GOALS_ODD,
        Par: Odds.FIRST_HALF_GOALS_EVEN,
    },
    '2ª Tiempo - Ganador (1-X-2)': {
        '1': Odds.SECOND_HALF_WIN_1,
        'X': Odds.SECOND_HALF_WIN_X,
        '2': Odds.SECOND_HALF_WIN_2,
    },
    '2ª Tiempo - Goles - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_GOALS_OVER,
            under: Odds.SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2ª Tiempo - Doble oportunidad': {
        '1X': Odds.SECOND_HALF_WIN_1X,
        '12': Odds.SECOND_HALF_WIN_12,
        'X2': Odds.SECOND_HALF_WIN_2X,
    },
    '2ª Tiempo - Empate, apuesta no valida': {
        1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '2ª Tiempo - Ambos equipos marcan': {
        Si: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
        No: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
    },
    '2ª Tiempo - Goles equipo local - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_SECOND_HALF_GOALS_OVER,
            under: Odds.E1_SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2ª Tiempo - Goles equipo visitante - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_SECOND_HALF_GOALS_OVER,
            under: Odds.E2_SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2ª Tiempo - Goles (Par / Impar': {
        Impar: Odds.SECOND_HALF_GOALS_ODD,
        Par: Odds.SECOND_HALF_GOALS_EVEN,
    },
    'Equipo Local - Goles (Par / Impar)': {
        Impar: Odds.E1_GOALS_ODD,
        Par: Odds.E1_GOALS_EVEN,
    },
    'Equipo visitante - Goles (Par / Impar)': {
        Impar: Odds.E2_GOALS_ODD,
        Par: Odds.E2_GOALS_EVEN,
    },
    'Ganador del Partido': {
        1: Odds.WIN_NE_1,
        2: Odds.WIN_NE_2,
    },
    ' Ganador': {
        1: Odds.WIN_NE_1,
        2: Odds.WIN_NE_2,
    },
    'Total Juegos - Par / Impar': {
        Impar: Odds.GAMES_ODD,
        Par: Odds.GAMES_EVEN,
    },
    'Total de Juegos - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.TOTAL_GAMES_OVER,
            under: Odds.TOTAL_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Set 1 - Total de Juegos (Más / Menos)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_SET_GAMES_OVER,
            under: Odds.FIRST_SET_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Ganador con Handicap - Juegos Ganados': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_GAMES_1,
            away: Odds.HANDICAP_GAMES_2,
        },
        replace: true,
        asian: true,
    },
    'Set 1 - Ganador': {
        1: Odds.FIRST_SET_WIN_1,
        2: Odds.FIRST_SET_WIN_2,
    },
    'Jugador 2 - Total de Juegos (Más / Menos)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_TOTAL_GAMES_OVER,
            under: Odds.E2_TOTAL_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Jugador 1 - Total de Juegos (Más / Menos)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_TOTAL_GAMES_OVER,
            under: Odds.E1_TOTAL_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Set 2 - Ganador': {
        1: Odds.SECOND_SET_WIN_1,
        2: Odds.SECOND_SET_WIN_2,
    },
    'Set 1 - Ganador con Hándicap - Juegos Ganados': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_SET_HANDICAP_GAMES_1,
            away: Odds.FIRST_SET_HANDICAP_GAMES_2,
        },
        replace: true,
        asian: true,
    },
    'Ganador (1-X-2)': {
        '1': Odds.WIN_1,
        'X': Odds.WIN_X,
        '2': Odds.WIN_2,
    },
    ' Ganador (1-X-2)': {
        '1': Odds.WIN_1,
        'X': Odds.WIN_X,
        '2': Odds.WIN_2,
    },
    'Total Carreras - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.POINTS_OVER,
            under: Odds.POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Total Carreras - Par / Impar': {
        Impar: Odds.POINTS_ODD,
        Par: Odds.POINTS_EVEN,
    },
    'Equipo Visitante - Total Carreras - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_POINTS_OVER,
            under: Odds.E2_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Equipo Local - Total Carreras - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_POINTS_OVER,
            under: Odds.E1_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Ganador con Handicap (1-X-2)': {
        '1 (0:1)': Odds.EH1.replace(':value', '0:1'),
        '1 (0:2)': Odds.EH1.replace(':value', '0:2'),
        '1 (0:3)': Odds.EH1.replace(':value', '0:3'),
        '1 (0:4)': Odds.EH1.replace(':value', '0:4'),
        '1 (1:0)': Odds.EH1.replace(':value', '1:0'),
        '1 (2:0)': Odds.EH1.replace(':value', '2:0'),
        '1 (3:0)': Odds.EH1.replace(':value', '3:0'),
        '1 (4:0)': Odds.EH1.replace(':value', '4:0'),
        'Empate (0:4)': Odds.EHX.replace(':value', '0:4'),
        'Empate (0:3)': Odds.EHX.replace(':value', '0:3'),
        'Empate (0:1)': Odds.EHX.replace(':value', '0:1'),
        'Empate (0:2)': Odds.EHX.replace(':value', '0:2'),
        'Empate (1:0)': Odds.EHX.replace(':value', '1:0'),
        'Empate (2:0)': Odds.EHX.replace(':value', '2:0'),
        'Empate (3:0)': Odds.EHX.replace(':value', '3:0'),
        'Empate (4:0)': Odds.EHX.replace(':value', '4:0'),
        '2 (0:1)': Odds.EH2.replace(':value', '0:1'),
        '2 (0:2)': Odds.EH2.replace(':value', '0:2'),
        '2 (0:3)': Odds.EH2.replace(':value', '0:3'),
        '2 (0:4)': Odds.EH2.replace(':value', '0:4'),
        '2 (1:0)': Odds.EH2.replace(':value', '1:0'),
        '2 (2:0)': Odds.EH2.replace(':value', '2:0'),
        '2 (3:0)': Odds.EH2.replace(':value', '3:0'),
        '2 (4:0)': Odds.EH2.replace(':value', '4:0'),
    },
    'Total Puntos (Par / Impar)': {
        Impar: Odds.POINTS_ODD,
        Par: Odds.POINTS_EVEN,
    },
    ' Total Puntos ( Mas de / Menos de ) (incl. Prorroga)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.POINTS_OVER_INCLUDING_ALL,
            under: Odds.POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,

    },
    ' Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.POINTS_OVER,
            under: Odds.POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Total Puntos ( Más de  / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.POINTS_OVER,
            under: Odds.POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Total Puntos ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.POINTS_OVER,
            under: Odds.POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Equipo Local - Total Puntos ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_POINTS_OVER,
            under: Odds.E1_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    ' Equipo Local - Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_POINTS_OVER,
            under: Odds.E1_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Equipo Visitante - Total Puntos ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_POINTS_OVER,
            under: Odds.E2_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    ' Equipo Visitante - Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_POINTS_OVER,
            under: Odds.E2_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ª Tiempo - Total Puntos ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_POINTS_OVER,
            under: Odds.FIRST_HALF_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2ª Tiempo - Total Puntos ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_POINTS_OVER,
            under: Odds.SECOND_HALF_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ª Tiempo - Total Puntos (Par / Impar)': {
        Impar: Odds.FIRST_HALF_POINTS_ODD,
        Par: Odds.FIRST_HALF_POINTS_EVEN,
    },
    '1ª Tiempo - Empate, apuesta no válida': {
        1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '2ª Tiempo - Empate, apuesta no válida': {
        1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '2ª Tiempo - Total Puntos (Par / Impar)': {
        Impar: Odds.SECOND_HALF_POINTS_ODD,
        Par: Odds.SECOND_HALF_POINTS_EVEN,
    },
    'Ganador (incl. prórroga)': {
        1: Odds.WIN_NE_1,
        2: Odds.WIN_NE_2,
    },
    'Total Goles (Par / Impar)': {
        Impar: Odds.GOALS_ODD,
        Par: Odds.GOALS_EVEN,
    },
    'Total Goles (Par / Impar) - (incl. prórroga y penales)': {
        Impar: Odds.GOALS_ODD_INCLUDING_ALL,
        Par: Odds.GOALS_EVEN_INCLUDING_ALL,
    },
    '1º Periodo - Goles - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_GOALS_OVER,
            under: Odds.FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2º Periodo - Goles - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_GOALS_OVER,
            under: Odds.SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },

    '3º Periodo - Goles -  Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.THIRD_HALF_GOALS_OVER,
            under: Odds.THIRD_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '3º Periodo - Goles - Más / Menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.THIRD_HALF_GOALS_OVER,
            under: Odds.THIRD_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Equipo visitante - Goles - Más / menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_GOALS_OVER,
            under: Odds.E2_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Equipo local - Goles - Más / menos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_GOALS_OVER,
            under: Odds.E1_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Total Goles - Más / Menos (Incl. prórroga)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.GOALS_OVER_INCLUDING_ALL,
            under: Odds.GOALS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    'Ganador con Handicap (incl. prórroga)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_1_INCLUDING_ALL,
            away: Odds.HANDICAP_2_INCLUDING_ALL,
        },
        replace: true,
        asian: true,
    },
    ' Ganador con Handicap (incl. Prorroga)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_1_INCLUDING_ALL,
            away: Odds.HANDICAP_2_INCLUDING_ALL,
        },
        replace: true,
        asian: true,
    },
    '1º Cuarto - Empate, apuesta no válida': {
        1: Odds.FIRST_QUARTER_H1_.replace(':value', '0'),
        2: Odds.FIRST_QUARTER_H2_.replace(':value', '0'),
    },
    '1º Cuarto - Total Puntos ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_QUARTER_POINTS_OVER,
            under: Odds.FIRST_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2º Cuarto - Empate, apuesta no válida': {
        1: Odds.SECOND_QUARTER_H1_,
        2: Odds.SECOND_QUARTER_H2_,
    },
    '3º Cuarto - Empate, apuesta no válida': {
        1: Odds.THIRD_QUARTER_H1_,
        2: Odds.THIRD_QUARTER_H2_,
    },
    '4º Cuarto - Empate, apuesta no válida': {
        1: Odds.FOURTH_QUARTER_H1_,
        2: Odds.FOURTH_QUARTER_H2_,
    },
    '1º Cuarto - Total Puntos (Par / Impar)': {
        Impar: Odds.FIRST_QUARTER_ODD,
        Par: Odds.FIRST_QUARTER_EVEN,
    },
    '2º Cuarto - Total Puntos (Par / Impar)': {
        Impar: Odds.SECOND_QUARTER_ODD,
        Par: Odds.SECOND_QUARTER_EVEN,
    },
    '3º Cuarto - Total - Impar / Par puntos': {
        Impar: Odds.THIRD_QUARTER_ODD,
        Par: Odds.THIRD_QUARTER_EVEN,
    },
    '4º Cuarto - Total - Impar / Par puntos': {
        Impar: Odds.FOURTH_QUARTER_ODD,
        Par: Odds.FOURTH_QUARTER_EVEN,
    },
    '1º Cuarto - Ganador (1-X-2)': {
        1: Odds.FIRST_QUARTER_WIN_1,
        Empate: Odds.FIRST_QUARTER_WIN_X,
        2: Odds.FIRST_QUARTER_WIN_2,
    },
    '2º Cuarto - Ganador (1-X-2)': {
        1: Odds.SECOND_QUARTER_WIN_1,
        Empate: Odds.SECOND_QUARTER_WIN_X,
        2: Odds.SECOND_QUARTER_WIN_2,
    },
    '3º Cuarto - Ganador (1-X-2)': {
        1: Odds.THIRD_QUARTER_WIN_1,
        Empate: Odds.THIRD_QUARTER_WIN_X,
        2: Odds.THIRD_QUARTER_WIN_2,
    },
    '4º Cuarto - Ganador (1-X-2)': {
        1: Odds.FOURTH_QUARTER_WIN_1,
        Empate: Odds.FOURTH_QUARTER_WIN_X,
        2: Odds.FOURTH_QUARTER_WIN_2,
    },
    '1º Cuarto - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_QUARTER_H1_,
            away: Odds.FIRST_QUARTER_H2_,
        },
        replace: true,
        asian: true,
    },
    '2º Cuarto - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_QUARTER_H1_,
            away: Odds.SECOND_QUARTER_H2_,
        },
        replace: true,
        asian: true,
    },
    '3º Cuarto - Ganador con Hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.THIRD_QUARTER_H1_,
            away: Odds.THIRD_QUARTER_H2_,
        },
        replace: true,
        asian: true,
    },
    '4º Cuarto - Ganador con Hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FOURTH_QUARTER_H1_,
            away: Odds.FOURTH_QUARTER_H2_,
        },
        replace: true,
        asian: true,
    },
    ' Total - Impar / Par (Incl. Prorroga)': {
        Impar: Odds.POINTS_ODD_INCLUDING_ALL,
        Par: Odds.POINTS_EVEN_INCLUDING_ALL,
    },
    ' Total - Impar / Par': {
        Impar: Odds.POINTS_ODD,
        Par: Odds.POINTS_EVEN,
    },
    '1° Tiempo - Total Puntos (Par / Impar)': {
        Impar: Odds.FIRST_HALF_POINTS_ODD,
        Par: Odds.FIRST_HALF_POINTS_EVEN,
    },
    ' Empate apuesta no valida': {
        1: Odds.AH1_.replace(':value', '0'),
        2: Odds.AH2_.replace(':value', '0'),
    },
    '1° Tiempo - Empate apuesta no valida': {
        1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '2° Tiempo - Ganador (1-X-2)': {
        1: Odds.SECOND_HALF_WIN_1,
        Empate: Odds.SECOND_HALF_WIN_X,
        2: Odds.SECOND_HALF_WIN_2,
    },
    '1° Cuarto - Ganador (1-X-2)': {
        1: Odds.FIRST_QUARTER_WIN_1,
        Empate: Odds.FIRST_QUARTER_WIN_X,
        2: Odds.FIRST_QUARTER_WIN_2,
    },
    '2° Cuarto - Ganador (1-X-2)': {
        1: Odds.SECOND_QUARTER_WIN_1,
        Empate: Odds.SECOND_QUARTER_WIN_X,
        2: Odds.SECOND_QUARTER_WIN_2,
    },
    '3° Cuarto - Ganador (1-X-2)': {
        1: Odds.THIRD_QUARTER_WIN_1,
        Empate: Odds.THIRD_QUARTER_WIN_X,
        2: Odds.THIRD_QUARTER_WIN_2,
    },
    '4° Cuarto - Ganador (1-X-2)': {
        1: Odds.FOURTH_QUARTER_WIN_1,
        Empate: Odds.FOURTH_QUARTER_WIN_X,
        2: Odds.FOURTH_QUARTER_WIN_2,
    },
    '1° Cuarto - Empate apuesta no valida': {
        1: Odds.FIRST_QUARTER_H1_,
        2: Odds.FIRST_QUARTER_H2_,
    },
    '2° Cuarto - Empate apuesta no valida': {
        1: Odds.SECOND_QUARTER_H1_,
        2: Odds.SECOND_QUARTER_H2_,
    },
    '3° Cuarto - Empate apuesta no valida': {
        1: Odds.THIRD_QUARTER_H1_,
        2: Odds.THIRD_QUARTER_H2_,
    },
    '4° Cuarto - Empate apuesta no valida': {
        1: Odds.FOURTH_QUARTER_H1_,
        2: Odds.FOURTH_QUARTER_H2_,
    },
    ' Equipo Local Total - Impar / Par': {
        Impar: Odds.E1_POINTS_ODD,
        Par: Odds.E1_POINTS_EVEN,
    },
    ' Equipo Visitante Total - Impar / Par': {
        Impar: Odds.E2_POINTS_ODD,
        Par: Odds.E2_POINTS_EVEN,
    },
    '1° Tiempo - Ganador con Handicap Asiatico': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
            away: Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        asian: true,
    },
    '2° Tiempo - Ganador con Handicap (incl. Prorroga)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_1_,
            away: Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_2_,
        },
        replace: true,
        asian: true,
    },
    '2° Tiempo - Ganador con Handicap Asiatico': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
            away: Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        asian: true,
    },
    '2° Tiempo - Total Puntos ( Mas de / Menos de ) (incl. Prorroga)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_POINTS_INCLUDE_ALL_OVER,
            under: Odds.SECOND_HALF_POINTS_INCLUDE_ALL_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2° Tiempo - Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_POINTS_OVER,
            under: Odds.SECOND_HALF_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2° Cuarto- Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_QUARTER_POINTS_OVER,
            under: Odds.SECOND_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '3° Cuarto - Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.THIRD_QUARTER_POINTS_OVER,
            under: Odds.THIRD_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '4° Cuarto - Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FOURTH_QUARTER_POINTS_OVER,
            under: Odds.FOURTH_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1° Cuarto - Total Puntos ( Mas de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_QUARTER_POINTS_OVER,
            under: Odds.FIRST_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2° Cuarto - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_QUARTER_H1_,
            away: Odds.SECOND_QUARTER_H2_,
        },
        replace: true,
        asian: true,
    },
    '3° Cuarto - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.THIRD_QUARTER_H1_,
            away: Odds.THIRD_QUARTER_H2_,
        },
        replace: true,
        asian: true,
    },
    '4° Cuarto - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FOURTH_QUARTER_H1_,
            away: Odds.FOURTH_QUARTER_H2_,
        },
        replace: true,
        asian: true,
    },
    'Ganador con Handicap - Sets': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_1,
            away: Odds.HANDICAP_2,
        },
        replace: true,
        asian: true,
    },
    '¿Habrá prórroga? Si / No': {
        Si: Odds.HAS_EXTRA_TIME_YES,
        No: Odds.HAS_EXTRA_TIME_NO,
    },
    'Total Goles - Más / Menos - Adicional': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.GOALS_OVER,
            under: Odds.GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1º Periodo - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
            away: Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        asian: true,
    },
    '2º Periodo - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
            away: Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        asian: true,
    },
    '3º Periodo - Ganador con Handicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.THIRD_HALF_ASIAN_HANDICAP_1_,
            away: Odds.THIRD_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        asian: true,
    },
    '1º Periodo - Ganador (1-X-2)': {
        1: Odds.FIRST_HALF_WIN_1,
        Empate: Odds.FIRST_HALF_WIN_X,
        2: Odds.FIRST_HALF_WIN_2,
    },
    '2º Periodo - Ganador (1-X-2)': {
        1: Odds.SECOND_HALF_WIN_1,
        Empate: Odds.SECOND_HALF_WIN_X,
        2: Odds.SECOND_HALF_WIN_2,
    },
    '3º Periodo - Ganador (1-X-2)': {
        1: Odds.THIRD_HALF_WIN_1,
        Empate: Odds.THIRD_HALF_WIN_X,
        2: Odds.THIRD_HALF_WIN_2,
    },
    '1º Periodo - Doble Oportunidad': {
        '1X': Odds.FIRST_HALF_WIN_1X,
        '12': Odds.FIRST_HALF_WIN_12,
        'X2': Odds.FIRST_HALF_WIN_2X,
    },
    '2º periodo - Doble oportunidad': {
        '1X': Odds.SECOND_HALF_WIN_1X,
        '12': Odds.SECOND_HALF_WIN_12,
        'X2': Odds.SECOND_HALF_WIN_2X,
    },
    '3º periodo - Doble oportunidad': {
        '1X': Odds.THIRD_HALF_WIN_1X,
        '12': Odds.THIRD_HALF_WIN_12,
        'X2': Odds.THIRD_HALF_WIN_2X,
    },
    '1º Periodo - Total Goles (Par / Impar)': {
        Impar: Odds.FIRST_HALF_GOALS_ODD,
        Par: Odds.FIRST_HALF_GOALS_EVEN,
    },
    '2º Periodo - Total Goles (Par / Impar)': {
        Impar: Odds.SECOND_HALF_GOALS_ODD,
        Par: Odds.SECOND_HALF_GOALS_EVEN,
    },
    '3º Periodo - Total Goles (Par / Impar)': {
        Impar: Odds.THIRD_HALF_GOALS_ODD,
        Par: Odds.THIRD_HALF_GOALS_EVEN,
    },
    '1º Periodo - Ambos equipos marcan': {
        Si: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
        No: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
    },
    '2º Periodo - Ambos equipos marcan': {
        Si: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
        No: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
    },
    '3º Periodo - Ambos equipos marcan': {
        Si: Odds.THIRD_HALF_BOTH_TEAMS_SCORE_YES,
        No: Odds.THIRD_HALF_BOTH_TEAMS_SCORE_NO,
    },
    '1º Periodo - Empate, apuesta no válida': {
        1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '2º Periodo - Empate, apuesta no válida': {
        1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '3º Periodo - Empate, apuesta no válida': {
        1: Odds.THIRD_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.THIRD_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    'Total Tiros de esquina - Más de / Menos de': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.CORNERS_TOTAL_OVER,
            under: Odds.CORNERS_TOTAL_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ª Tiempo- Tiros de esquina ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_CORNERS_OVER,
            under: Odds.FIRST_HALF_CORNERS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'Ganador con Handicap de Tiros de esquina': {
        items: {
            home: Odds.CORNERS_HANDICAP_1,
            away: Odds.CORNERS_HANDICAP_2,
        },
        regexp: '[(].*[)]',
        replace: true,
        asian: true,
    },
    '1ª Tiempo - Ganador con Handicap de Tiros de esquina': {
        items: {
            home: Odds.FIRST_HALF_CORNERS__HANDICAP_1,
            away: Odds.FIRST_HALF_CORNERS__HANDICAP_2,
        },
        regexp: '[(].*[)]',
        replace: true,
        asian: true,
    },
    'Total de tarjetas en el partido – ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.YELLOW_CARDS_TOTAL_OVER,
            under: Odds.YELLOW_CARDS_TOTAL_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ª Tiempo - Total de tarjetas ( Más de / Menos de )': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_OVER,
            under: Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_UNDER,
        },
        replace: true,
        over_under: true,
    },
};

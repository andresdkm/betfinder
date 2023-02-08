import Odds from '../../core/Odds';

export default {
    '1x2': {
        1: Odds.WIN_1,
        empate: Odds.WIN_X,
        2: Odds.WIN_2,
    },
    'ambos equipos marcan': {
        sí: Odds.BOTH_TEAMS_SCORE_YES,
        no: Odds.BOTH_TEAMS_SCORE_NO,
    },
    'doble oportunidad': {
        '1 o empate': Odds.WIN_1X,
        '1 o 2': Odds.WIN_12,
        'empate o 2': Odds.WIN_2X,
    },
    '1 gana': {
        sí: Odds.WIN_1_YES,
        no: Odds.WIN_1_NO,
    },
    '2 gana': {
        sí: Odds.WIN_2_YES,
        no: Odds.WIN_2_NO,
    },
    'apuesta sin empate': {
        1: Odds.AH1_.replace(':value', '0'),
        2: Odds.AH2_.replace(':value', '0'),
    },

    'hándicap 0:1': {
        '1 (0:1)': Odds.EH1.replace(':value', '0:1'),
        'empate (0:1)': Odds.EHX.replace(':value', '0:1'),
        '2 (0:1)': Odds.EH2.replace(':value', '0:1'),
    },
    'hándicap 1:0': {
        '1 (1:0)': Odds.EH1.replace(':value', '1:0'),
        'empate (1:0)': Odds.EHX.replace(':value', '1:0'),
        '2 (1:0)': Odds.EH2.replace(':value', '1:0'),
    },
    'hándicap 0:2': {
        '1 (0:2)': Odds.EH1.replace(':value', '0:2'),
        'empate (0:2)': Odds.EHX.replace(':value', '0:2'),
        '2 (0:2)': Odds.EH2.replace(':value', '0:2'),
    },
    'hándicap 2:0': {
        '1 (2:0)': Odds.EH1.replace(':value', '2:0'),
        'empate (2:0)': Odds.EHX.replace(':value', '2:0'),
        '2 (2:0)': Odds.EH2.replace(':value', '2:0'),
    },
    'hándicap 0:3': {
        '1 (0:3)': Odds.EH1.replace(':value', '0:3'),
        'empate (0:3)': Odds.EHX.replace(':value', '0:3'),
        '2 (0:3)': Odds.EH2.replace(':value', '0:3'),
    },
    'hándicap 3:0': {
        '1 (3:0)': Odds.EH1.replace(':value', '3:0'),
        'empate (3:0)': Odds.EHX.replace(':value', '3:0'),
        '2 (3:0)': Odds.EH2.replace(':value', '3:0'),
    },
    'par/impar': {
        impar: Odds.GOALS_ODD,
        par: Odds.GOALS_EVEN,
    },
    '1 par/impar': {
        impar: Odds.E1_GOALS_ODD,
        par: Odds.E1_GOALS_EVEN,
    },
    '2 par/impar': {
        impar: Odds.E2_GOALS_ODD,
        par: Odds.E2_GOALS_EVEN,
    },
    '1ra mitad - 1x2': {
        1: Odds.FIRST_HALF_WIN_1,
        empate: Odds.FIRST_HALF_WIN_X,
        2: Odds.FIRST_HALF_WIN_2,
    },
    '1º mitad - doble oportunidad': {
        '1 o empate': Odds.FIRST_HALF_WIN_1X,
        '1 o 2': Odds.FIRST_HALF_WIN_12,
        'empate o 2': Odds.FIRST_HALF_WIN_2X,
    },
    '1ra mitad - ambos equipos marcan': {
        sí: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
        no: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
    },
    '1º mitad - apuesta sin empate': {
        1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '1º mitad - 1 total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_FIRST_HALF_GOALS_OVER,
            under: Odds.E1_FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1ra mitad - 2 total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_FIRST_HALF_GOALS_OVER,
            under: Odds.E2_FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1º mitad - par/impar': {
        impar: Odds.FIRST_HALF_GOALS_ODD,
        par: Odds.FIRST_HALF_GOALS_EVEN,
    },
    '2da mitad - 1x2': {
        1: Odds.SECOND_HALF_WIN_1,
        empate: Odds.SECOND_HALF_WIN_X,
        2: Odds.SECOND_HALF_WIN_2,
    },
    '2da mitad - doble oportunidad': {
        '1 o empate': Odds.SECOND_HALF_WIN_1X,
        '1 o 2': Odds.SECOND_HALF_WIN_12,
        'empate o 2': Odds.SECOND_HALF_WIN_2X,
    },
    '2da mitad - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_GOALS_OVER,
            under: Odds.SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2da mitad - 1 total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_SECOND_HALF_GOALS_OVER,
            under: Odds.E1_SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2da mitad - 2 total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_SECOND_HALF_GOALS_OVER,
            under: Odds.E2_SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2da mitad - ambos equipos marcan': {
        sí: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
        no: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
    },
    '2º mitad - apuesta sin empate': {
        1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '2da mitad - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
            away: Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        teams: true,
    },
    'total tiros esquina': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.CORNERS_TOTAL_OVER,
            under: Odds.CORNERS_TOTAL_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1º mitad - total tiros esquina': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_CORNERS_OVER,
            under: Odds.FIRST_HALF_CORNERS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'total tarjetas': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.YELLOW_CARDS_TOTAL_OVER,
            under: Odds.YELLOW_CARDS_TOTAL_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1º mitad - total tarjetas': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_OVER,
            under: Odds.FIRST_HALF_YELLOW_CARDS_TOTAL_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '¿expulsión?': {
        sí: Odds.RED_CARD_YES,
        no: Odds.RED_CARD_NO,
    },
    'tiros esquina par/impar': {
        impar: Odds.CORNERS_ODD,
        par: Odds.CORNERS_EVEN,
    },
    'ganador': {
        1: Odds.WIN_NE_1,
        2: Odds.WIN_NE_2,
    },
    'primero set - ganador': {
        1: Odds.FIRST_SET_WIN_1,
        2: Odds.FIRST_SET_WIN_2,
    },
    'segundo set - ganador': {
        1: Odds.SECOND_SET_WIN_1,
        2: Odds.SECOND_SET_WIN_2,
    },

    // Tennis
    'hándicap de juego': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_GAMES_1,
            away: Odds.HANDICAP_GAMES_2,
        },
        replace: true,
        teams: true,
    },
    'hándicap de set': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_SET_1,
            away: Odds.HANDICAP_SET_2,
        },
        replace: true,
        teams: true,
    },
    '1 gana un set': {
        sí: Odds.E1_WIN_SET_YES,
        no: Odds.E1_WIN_SET_NO,
    },
    '2 gana un set': {
        sí: Odds.E2_WIN_SET_YES,
        no: Odds.E2_WIN_SET_NO,
    },
    'total juegos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.TOTAL_GAMES_OVER,
            under: Odds.TOTAL_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'primero set - total juegos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_SET_GAMES_OVER,
            under: Odds.FIRST_SET_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'juegos par/impar': {
        impar: Odds.GAMES_ODD,
        par: Odds.GAMES_EVEN,
    },
    'primero set - hándicap juego': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_SET_HANDICAP_GAMES_1,
            away: Odds.FIRST_SET_HANDICAP_GAMES_2,
        },
        replace: true,
        teams: true,
    },
    '1 total juegos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_TOTAL_GAMES_OVER,
            under: Odds.E1_TOTAL_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2 total juegos': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_TOTAL_GAMES_OVER,
            under: Odds.E2_TOTAL_GAMES_UNDER,
        },
        replace: true,
        over_under: true,
    },
    // baloncesto
    'ganador (incl. ot)': {
        1: Odds.WIN_NE_1,
        2: Odds.WIN_NE_2,
    },
    'total (incl. ot)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.POINTS_OVER_INCLUDING_ALL,
            under: Odds.POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    'hándicap (incl. ot)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_1_INCLUDING_ALL,
            away: Odds.HANDICAP_2_INCLUDING_ALL,
        },
        replace: true,
        teams: true,
    },
    'total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.GOALS_OVER,
            under: Odds.GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '1 total (incl. ot)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_POINTS_OVER_INCLUDING_ALL,
            under: Odds.E1_POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    '2 total (incl. ot)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_POINTS_OVER_INCLUDING_ALL,
            under: Odds.E2_POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    '¿habrá prórroga?': {
        sí: Odds.HAS_EXTRA_TIME_YES,
        no: Odds.HAS_EXTRA_TIME_NO,
    },
    'par/impar (incl. ot)': {
        impar: Odds.POINTS_ODD_INCLUDING_ALL,
        par: Odds.POINTS_EVEN_INCLUDING_ALL,
    },
    'primero cuarto - 1x2': {
        1: Odds.FIRST_QUARTER_WIN_1,
        empate: Odds.FIRST_QUARTER_WIN_X,
        2: Odds.FIRST_QUARTER_WIN_2,
    },
    'segundo cuarto - 1x2': {
        1: Odds.SECOND_QUARTER_WIN_1,
        empate: Odds.SECOND_QUARTER_WIN_X,
        2: Odds.SECOND_QUARTER_WIN_2,
    },
    'tercero cuarto - 1x2': {
        1: Odds.THIRD_QUARTER_WIN_1,
        empate: Odds.THIRD_QUARTER_WIN_X,
        2: Odds.THIRD_QUARTER_WIN_2,
    },
    'cuarto cuarto - 1x2': {
        1: Odds.FOURTH_QUARTER_WIN_1,
        empate: Odds.FOURTH_QUARTER_WIN_X,
        2: Odds.FOURTH_QUARTER_WIN_2,
    },
    'primero cuarto - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_QUARTER_POINTS_OVER,
            under: Odds.FIRST_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'primero cuarto - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_QUARTER_H1_,
            away: Odds.FIRST_QUARTER_H2_,
        },
        replace: true,
        teams: true,
    },
    'segundo cuarto - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_QUARTER_H1_,
            away: Odds.SECOND_QUARTER_H2_,
        },
        replace: true,
        teams: true,
    },
    'tercero cuarto - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.THIRD_QUARTER_H1_,
            away: Odds.THIRD_QUARTER_H2_,
        },
        replace: true,
        teams: true,
    },
    'cuarto cuarto - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FOURTH_QUARTER_H1_,
            away: Odds.FOURTH_QUARTER_H2_,
        },
        replace: true,
        teams: true,
    },
    'primero cuarto - apuesta sin empate': {
        1: Odds.FIRST_QUARTER_H1_.replace(':value', '0'),
        2: Odds.FIRST_QUARTER_H2_.replace(':value', '0'),
    },
    'segundo cuarto - apuesta sin empate': {
        1: Odds.SECOND_QUARTER_H1_.replace(':value', '0'),
        2: Odds.SECOND_QUARTER_H2_.replace(':value', '0'),
    },
    'tercero cuarto - apuesta sin empate': {
        1: Odds.THIRD_QUARTER_H1_.replace(':value', '0'),
        2: Odds.THIRD_QUARTER_H2_.replace(':value', '0'),
    },
    'cuarto cuarto - apuesta sin empate': {
        1: Odds.FOURTH_QUARTER_H1_.replace(':value', '0'),
        2: Odds.FOURTH_QUARTER_H2_.replace(':value', '0'),
    },
    'primero cuarto - par/impar': {
        impar: Odds.FIRST_QUARTER_ODD,
        par: Odds.FIRST_QUARTER_EVEN,
    },
    'segundo cuarto - par/impar': {
        impar: Odds.SECOND_QUARTER_ODD,
        par: Odds.SECOND_QUARTER_EVEN,
    },
    'tercero cuarto - par/impar': {
        impar: Odds.THIRD_QUARTER_ODD,
        par: Odds.THIRD_QUARTER_EVEN,
    },
    'cuarto cuarto - par/impar': {
        impar: Odds.FOURTH_QUARTER_ODD,
        par: Odds.FOURTH_QUARTER_EVEN,
    },
    '1ra mitad - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
            away: Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        teams: true,
    },
    '1ra mitad - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_POINTS_OVER,
            under: Odds.FIRST_HALF_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2º mitad - total (incl. ot)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_POINTS_OVER,
            under: Odds.SECOND_HALF_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2º mitad - 1x2 (incl. ot)': {
        1: Odds.SECOND_HALF_WIN_1,
        empate: Odds.SECOND_HALF_WIN_X,
        2: Odds.SECOND_HALF_WIN_2,
    },
    '2º mitad - apuesta sin empate (incl. ot)': {
        1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    '2º mitad - par/impar (incl. ot)': {
        impar: Odds.SECOND_HALF_POINTS_INCLUDE_ALL_EVEN,
        par: Odds.SECOND_HALF_POINTS_INCLUDE_ALL_ODD,
    },
    '2da mitad - par/impar': {
        impar: Odds.SECOND_HALF_POINTS_ODD,
        par: Odds.SECOND_HALF_POINTS_EVEN,
    },
    '2º mitad - hándicap (incl. ot)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_1_,
            away: Odds.SECOND_HALF_ASIAN_HANDICAP_INCLUDE_ALL_2_,
        },
        replace: true,
        teams: true,
    },
    // american football
    'cuarto cuarto - total (incl. ot)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FOURTH_QUARTER_POINTS_OVER_INCLUDING_ALL,
            under: Odds.FOURTH_QUARTER_POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    'par/impar 1 - (incl. ot)': {
        impar: Odds.E1_POINTS_ODD_INCLUDING_ALL,
        par: Odds.E1_POINTS_EVEN_INCLUDING_ALL,
    },
    'par/impar 2 - (incl. ot)': {
        impar: Odds.E2_POINTS_ODD_INCLUDING_ALL,
        par: Odds.E2_POINTS_EVEN_INCLUDING_ALL,
    },
    'cuarto cuarto - apuesta sin empate (incl. ot)': {
        1: Odds.FOURTH_QUARTER_H1_.replace(':value', '0'),
        2: Odds.FOURTH_QUARTER_H2_.replace(':value', '0'),
    },
    'cuarto cuarto - hándicap (incl. ot)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FOURTH_QUARTER_H1_,
            away: Odds.FOURTH_QUARTER_H2_,
        },
        replace: true,
        teams: true,
    },
    'segundo cuarto - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_QUARTER_POINTS_OVER,
            under: Odds.SECOND_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'tercero cuarto - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.THIRD_QUARTER_POINTS_OVER,
            under: Odds.THIRD_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'cuarto cuarto - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FOURTH_QUARTER_POINTS_OVER,
            under: Odds.FOURTH_QUARTER_POINTS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    // Hockey,
    'ganador (incl. ot y penaltis)': {
        1: Odds.WIN_NE_1,
        2: Odds.WIN_NE_2,
    },
    'hándicap (incl. ot y penaltis)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_1_INCLUDING_ALL,
            away: Odds.HANDICAP_2_INCLUDING_ALL,
        },
        replace: true,
        teams: true,
    },
    'total (incl. ot y penaltis)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.GOALS_OVER_INCLUDING_ALL,
            under: Odds.GOALS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    'total 1 (incl. ot y penaltis)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_GOALS_OVER_INCLUDE_ALL,
            under: Odds.E1_GOALS_UNDER_INCLUDE_ALL,
        },
        replace: true,
        over_under: true,
    },
    'total 2 (incl. ot y penaltis)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_GOALS_OVER_INCLUDE_ALL,
            under: Odds.E2_GOALS_UNDER_INCLUDE_ALL,
        },
        replace: true,
        over_under: true,
    },
    'par/impar (incl. ot y penaltis)': {
        impar: Odds.GOALS_ODD_INCLUDING_ALL,
        par: Odds.GOALS_EVEN_INCLUDING_ALL,
    },
    'hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_1,
            away: Odds.HANDICAP_2,
        },
        replace: true,
        teams: true,
    },
    'primero periodo - doble oportunidad': {
        '1 o empate': Odds.FIRST_HALF_WIN_1X,
        '1 o 2': Odds.FIRST_HALF_WIN_12,
        'empate o 2': Odds.FIRST_HALF_WIN_2X,
    },
    'segundo periodo - doble oportunidad': {
        '1 o empate': Odds.SECOND_HALF_WIN_1X,
        '1 o 2': Odds.SECOND_HALF_WIN_12,
        'empate o 2': Odds.SECOND_HALF_WIN_2X,
    },
    'tercero periodo - doble oportunidad': {
        '1 o empate': Odds.THIRD_HALF_WIN_1X,
        '1 o 2': Odds.THIRD_HALF_WIN_12,
        'empate o 2': Odds.THIRD_HALF_WIN_2X,
    },
    '1 total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_GOALS_OVER,
            under: Odds.E1_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    '2 total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_GOALS_OVER,
            under: Odds.E2_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'primero periodo - 1x2': {
        1: Odds.FIRST_HALF_WIN_1,
        empate: Odds.FIRST_HALF_WIN_X,
        2: Odds.FIRST_HALF_WIN_2,
    },
    'segundo periodo - 1x2': {
        1: Odds.SECOND_HALF_WIN_1,
        empate: Odds.SECOND_HALF_WIN_X,
        2: Odds.SECOND_HALF_WIN_2,
    },
    'tercero periodo - 1x2': {
        1: Odds.SECOND_HALF_WIN_1,
        empate: Odds.SECOND_HALF_WIN_X,
        2: Odds.SECOND_HALF_WIN_2,
    },
    'primero periodo - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.FIRST_HALF_GOALS_OVER,
            under: Odds.FIRST_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'segundo periodo - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.SECOND_HALF_GOALS_OVER,
            under: Odds.SECOND_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'tercero periodo - total': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.THIRD_HALF_GOALS_OVER,
            under: Odds.THIRD_HALF_GOALS_UNDER,
        },
        replace: true,
        over_under: true,
    },
    'primero periodo - ambos equipos marcan': {
        sí: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_YES,
        no: Odds.FIRST_HALF_BOTH_TEAMS_SCORE_NO,
    },
    'segundo periodo - ambos equipos marcan': {
        sí: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_YES,
        no: Odds.SECOND_HALF_BOTH_TEAMS_SCORE_NO,
    },
    'tercero periodo - ambos equipos marcan': {
        sí: Odds.THIRD_HALF_BOTH_TEAMS_SCORE_YES,
        no: Odds.THIRD_HALF_BOTH_TEAMS_SCORE_NO,
    },
    'primero periodo - apuesta sin empate': {
        1: Odds.FIRST_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.FIRST_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    'segundo periodo - apuesta sin empate': {
        1: Odds.SECOND_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.SECOND_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    'tercero periodo - apuesta sin empate': {
        1: Odds.THIRD_HALF_ASIAN_HANDICAP_1_.replace(':value', '0'),
        2: Odds.THIRD_HALF_ASIAN_HANDICAP_2_.replace(':value', '0'),
    },
    'primero periodo - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.FIRST_HALF_ASIAN_HANDICAP_1_,
            away: Odds.FIRST_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        teams: true,
    },
    'segundo periodo - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.SECOND_HALF_ASIAN_HANDICAP_1_,
            away: Odds.SECOND_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        teams: true,
    },
    'tercero periodo - hándicap': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.THIRD_HALF_ASIAN_HANDICAP_1_,
            away: Odds.THIRD_HALF_ASIAN_HANDICAP_2_,
        },
        replace: true,
        teams: true,
    },
    'primero periodo - par/impar': {
        impar: Odds.FIRST_HALF_GOALS_ODD,
        par: Odds.FIRST_HALF_GOALS_EVEN,
    },
    'segundo periodo - par/impar': {
        impar: Odds.SECOND_HALF_GOALS_ODD,
        par: Odds.SECOND_HALF_GOALS_EVEN,
    },
    'tercero periodo - par/impar': {
        impar: Odds.THIRD_HALF_GOALS_ODD,
        par: Odds.THIRD_HALF_GOALS_EVEN,
    },
    // baseball
    'ganador (incl. extra innings)': {
        1: Odds.WIN_NE_1,
        2: Odds.WIN_NE_2,
    },
    'hándicap (incl. extra innings)': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.HANDICAP_1_INCLUDING_ALL,
            away: Odds.HANDICAP_2_INCLUDING_ALL,
        },
        replace: true,
        teams: true,
    },
    'total (incl. extra innings)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.POINTS_OVER_INCLUDING_ALL,
            under: Odds.POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    'total 1 (incl. extra innings)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E1_POINTS_OVER_INCLUDING_ALL,
            under: Odds.E1_POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    'total 2 (incl. extra innings)': {
        regexp: '([0-9]*[.])?[0-9]+',
        items: {
            over: Odds.E2_POINTS_OVER_INCLUDING_ALL,
            under: Odds.E2_POINTS_UNDER_INCLUDING_ALL,
        },
        replace: true,
        over_under: true,
    },
    'par/impar (incl. extra innings)': {
        impar: Odds.POINTS_ODD_INCLUDING_ALL,
        par: Odds.POINTS_EVEN_INCLUDING_ALL,
    },
    '¿habrá extra inning?': {
        sí: Odds.HAS_EXTRA_TIME_YES,
        no: Odds.HAS_EXTRA_TIME_NO,
    },
    'hándicap tiros esquina': {
        regexp: '[(].*[)]',
        items: {
            home: Odds.CORNERS_HANDICAP_1,
            away: Odds.CORNERS_HANDICAP_2,
        },
        replace: true,
        teams: true,
    },
};

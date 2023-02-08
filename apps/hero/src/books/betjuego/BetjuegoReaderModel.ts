declare module BetjuegoReaderModel {
    interface RootObject {
        R: string;
        D: D;
    }
    interface D {
        ID: string;
        DS: string;
        GID: string;
        SID: string;
        BTID: string;
        ST: string;
        LIVE: string;
        C: string;
        P: string;
        STARTDATE: string;
        INCTYPE: string;
        ENABLE: string;
        TYPE: string;
        IDFH: string;
        IDFA: string;
        HOME?: any;
        AWAY?: any;
        FH: string;
        FA: string;
        E_RESULT?: any;
        RFT1?: any;
        RFT2?: any;
        RHT1?: any;
        RHT2?: any;
        PL: string;
        CBL: string;
        SPECIALC: string;
        TEAMID?: any;
        GN: string;
        GP: string;
        SGID: string;
        SG: string;
        S: string;
        O: any;
        AUX: AUX;
        MK: MK[];
        CATMARKET: CATMARKET[];
    }
    interface CATMARKET {
        CODE: string;
        VALUE: string;
    }

    interface MK {
        ID: string;
        DS: string;
        MDESC: string;
        P: string;
        VW?: string;
        GCAT: string;
        MARKETID: string;
        M_PAYOUT: string;
        CNT: string;
        CNTLABEL: string;
        SGN: string[];
        SGNK: string[];
    }

    interface AUX {
        S_1X2HND2T: number[];
        S_1X2HND: number[];
        S_AOU1T: number[];
        S_1X2OU2T: number[];
        S_AOU: number[];
        S_1X2OROU: number[];
        S_OUHOME1T: number[];
        S_1X2GGNGOU: number[];
        S_GGNGOU: number[];
        S_OUAWAY: number[];
        S_DCOU2T15: number[];
        S_12HND2T: number[];
        S_YNGOALS2T: number[];
        S_DCOUEX: number[];
        S_OUAWAY2T: number[];
        S_OU1T: number[];
        S_12HND: number[];
        S_OUHOME: number[];
        S_1X2HND1T: number[];
        S_DCOU1T15: number[];
        S_1X2ANDOU: number[];
        S_AOU2T: number[];
        S_1X2OU1T: number[];
        S_12HND1T: number[];
        S_YNGOALS1T: number[];
        S_OUHOME2T: number[];
        S_OUAWAY1T: number[];
        S_OU: number[];
        S_OU2T: number[];
    }
}
declare module MegaEventModel {
    interface RootObject {
        id: number;
        n: string;
        t: T[];
        is3way: boolean;
    }

    interface T {
        id: number;
        n: string;
        m: M[];
        mAm?: any;
        ot: Ot[];
        o: O[];
        gItem: boolean;
        tp: number;
        cid: number;
        cgid: number;
        mAs?: any;
        hdr?: any;
        comb?: any;
    }

    interface O {
        TournamentID: number;
        TournamentGroupID?: any;
        CategoryID: number;
        OutrightID: number;
        Name: string;
        EventDate: string;
        EndDate: string;
        OddTypeID: number;
        Odds: Odd[];
    }

    interface Odd {
        CompetitorID: number;
        Name: string;
        Odd: string;
        IsSelected: boolean;
    }

    interface Ot {
        MatchTabID: number;
        TabName: string;
        TabDescription: string;
        PlayerOddsEnabled: boolean;
        HomeTeamID: number;
        AwayTeamID: number;
        OddTypes: OddType[];
        MatchName?: any;
        TournamentID: number;
        CategoryID: number;
        TournamentName?: any;
        CategoryName?: any;
        SportID: number;
        EventCode?: any;
    }

    interface OddType {
        OddTypeID: number;
        Name: string;
        Order: number;
        OTIdentifier?: any;
        ColumnMax: number;
        Cashout: boolean;
        Outcomes?: any;
    }

    interface M {
        sid: number;
        ec: number;
        brid: number;
        at: string;
        ht: string;
        d: string;
        sd: string;
        mot: number;
        mid: number;
        mt: string;
        nmo: number;
        o1: string;
        como1: number;
        ox: string;
        comox: number;
        o2: string;
        como2: number;
        oo: string;
        comoo: number;
        ou: string;
        comou: number;
        ogg: string;
        comogg: number;
        ong: string;
        comong: number;
        odc12: string;
        comodc12: number;
        odc1x: string;
        comodc1x: number;
        odcx2: string;
        comodcx2: number;
        oto: number;
        otu: number;
        otid1: number;
        otidx: number;
        otid2: number;
        otgg: number;
        otng: number;
        otdc12: number;
        otdc1x: number;
        otdcx2: number;
        svbou: string;
        IsOpapMatch: boolean;
        cid: number;
        tid: number;
        Odd1TypeID: number;
        Odd1TypeName: string;
        OddXTypeID: number;
        OddXTypeName: string;
        Odd2TypeID: number;
        Odd2TypeName: string;
        OddOverTypeID: number;
        OddOverTypeName: string;
        OddUnderTypeID: number;
        OddUnderTypeName: string;
        OddGGTypeID: number;
        OddGGTypeName: string;
        OddNGTypeID: number;
        OddNGTypeName: string;
        Odd1XTypeID: number;
        Odd1XTypeName: string;
        Odd12TypeID: number;
        Odd12TypeName: string;
        OddX2TypeID: number;
        OddX2TypeName: string;
        cmd: string;
        cmmt: string;
    }
}
declare module BetalfaReaderModel {

    interface RootObject {
        MatchTabID: number;
        TabName: string;
        TabDescription?: string;
        PlayerOddsEnabled: boolean;
        HomeTeamID: number;
        AwayTeamID: number;
        OddTypes: OddType[];
        MatchName: string;
        TournamentID: number;
        CategoryID: number;
        TournamentName: string;
        CategoryName: string;
        SportID: number;
        EventCode: number;
    }

    interface OddType {
        OddTypeID: number;
        Name: string;
        Order: number;
        OTIdentifier?: string | string;
        ColumnMax: number;
        Cashout: boolean;
        Outcomes: Outcome[];
    }

    interface Outcome {
        Odd: string;
        OddTypeOutcomeID: number;
        Outcome: string;
        Order: number;
        IsSelected: boolean;
        Sbv?: null | string | string;
        Column: number;
        OTypeOrder: number;
        Identifier?: (null | string)[];
        comb?: number | number;
    }

}

declare module WplayReaderModel {

    export interface Item2 {
        Id: any;
        Name: string;
        Result: string;
        Price: number;
        Node: string;
        SelectionTypeId: number;
        ColumnNum: number;
        MobileColumnNum: number;
        ColumnNums: number[];
        MarketSelectionId: number;
        FastCode: string;
        IsActive: boolean;
        MB: number;
    }

    export interface Item {
        Id: any;
        Name: string;
        SpecialOddsValue: string;
        MarketTypeId: string;
        Items: Item2[];
        Node: string;
        IsSettledInOT: boolean;
        Template: number;
        ColumnCount: number;
        MColumnCount: number;
        SportMarketId: number;
        DisplayOrder: number;
        Status: number;
        IsSelectionPartial: boolean;
    }

    export interface Competitor {
        Id: number;
        Name: string;
        Order: number;
        ExtId: number;
    }

    export interface SpecOdd {
        Value: string;
    }

    export interface Item3 {
        MarketTypeId: string;
        Name: string;
        SpecOdd: SpecOdd;
    }

    export interface MarketGroup {
        Id: number;
        Name: string;
        Items: Item[];
        SportTypeId: number;
        PopularMarkets: any[];
        MaxPopularCount: number;
    }

    export interface Result {
        Id: number;
        SportId: number;
        SportTypeId: number;
        SportName: string;
        CategoryId: number;
        CategoryName: string;
        ChampId: number;
        ChampName: string;
        Name: string;
        EventDate: Date;
        EventCode: number;
        Status: number;
        StatusStr: string;
        ExtId: string;
        IsPromo: boolean;
        IsLiveStream: boolean;
        IsBetpalEvent: boolean;
        EventType: number;
        Items: Item[];
        Node: string;
        Competitors: Competitor[];
        RiskGroupId: number;
        IsLiveEvent: boolean;
        LiveCurrentTime: string;
        LiveScore: string;
        MarketGroups: MarketGroup[];
        AllMarketsCount: number;
        IsAutoHL: boolean;
        CompetitorsCount: number;
        IsParlay: boolean;
        IsVirtual: boolean;
        IsLiveBooked: boolean;
    }

    export interface RootObject {
        Result: Result;
    }

}

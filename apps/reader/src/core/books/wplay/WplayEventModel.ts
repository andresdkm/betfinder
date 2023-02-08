declare module WplayEventModel {

    export interface Item3 {
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
        IsActive: boolean;
        MB: number;
    }

    export interface Item2 {
        Id: any;
        Name: string;
        SpecialOddsValue: string;
        SpecialOddsName: string;
        MarketTypeId: string;
        Items: Item3[];
        Node: string;
        IsSettledInOT: boolean;
        Template: number;
        ColumnCount: number;
        MColumnCount: number;
        SportMarketId: number;
        Status: number;
        IsSelectionPartial: boolean;
    }

    export interface Competitor {
        Id: number;
        Name: string;
        Order: number;
        ExtId: number;
    }

    export interface Event {
        Id: any;
        SportId: number;
        SportTypeId: number;
        SportName: string;
        CategoryId: number;
        CategoryName: string;
        ChampId: number;
        ChampName: string;
        Name: string;
        EventDate: string;
        EventCode: number;
        Status: number;
        StatusStr: string;
        ExtId: string;
        IsPromo: boolean;
        IsLiveStream: boolean;
        IsBetpalEvent: boolean;
        EventType: number;
        Items: Item2[];
        Node: string;
        Competitors: Competitor[];
        RiskGroupId: number;
        IsLiveEvent: boolean;
        ISO: string;
        AllMarketsCount: number;
        IsAutoHL: boolean;
        CompetitorsCount: number;
        IsParlay: boolean;
        IsVirtual: boolean;
        IsLiveBooked: boolean;
    }

    export interface Item4 {
        Id: number;
        Name: string;
    }

    export interface SpecOdd {
        TypeId: number;
        Name: string;
        Value: string;
    }

    export interface Header {
        Template: number;
        Items: Item4[];
        SortOrder: number;
        ColumnCount: number;
        MColumnCount: number;
        MarketTypeId: string;
        Name: string;
        SpecOdd: SpecOdd;
    }

    export interface Item {
        Node: string;
        Items: any[];
        Events: Event[];
        Headers: Header[];
        Order: number;
    }

    export interface Result {
        Items: Item[];
    }

    export interface RootObject {
        Result: Result;
    }

}


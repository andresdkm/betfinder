declare module BetalfaLeagueModel {
    interface RootObject {
        Fixtures: Fixture[];
        IsLiveBettingEnabled: boolean;
        IsVflEnabled: boolean;
        IsAuthenticated: boolean;
        ShowFavoritesOnly: boolean;
    }

    interface Fixture {
        ID: number;
        Name: string;
        SystemName: string;
        IsFavorite: boolean;
        NumberOfItems: number;
        IsFixtureGroup: boolean;
        Order: number;
        Items: Item2[];
    }

    interface Item2 {
        ID: number;
        Name: string;
        SystemName: string;
        IsFavorite: boolean;
        NumberOfItems: number;
        IsFixtureGroup: boolean;
        Order: number;
        Items: Item[];
    }

    interface Item {
        ID: number;
        Name: string;
        SystemName: string;
        IsFavorite: boolean;
        NumberOfItems: number;
        IsFixtureGroup: boolean;
        Order: number;
        Items?: any;
    }
}
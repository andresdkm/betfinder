declare module ColbetModel {
    interface CategoryRoot {
        id: number;
        name: string;
        categories: Category[];
    }

    interface Category {
        id: number;
        name: string;
        countryId: number;
        eventCount: number;
        isOutright: boolean;
        tournaments: Tournament[];
    }

    interface Tournament {
        id: number;
        name: string;
        eventCount: number;
        isOutright: boolean;
        isTop: boolean;
        events: Event[];
    }
    interface Event {
        id: number;
        eventType: string;
        eventDate: string;
        sport: number;
        sportName: string;
        category: number;
        categoryName: string;
        country: number;
        tournament: number;
        tournamentName: string;
        homeHasLogo: boolean;
        homeTeam: number;
        homeName: string;
        awayHasLogo: boolean;
        awayTeam: number;
        awayName: string;
        status: number;
        live: boolean;
        marketCount: number;
        threeway: boolean;
        markets: Market[];
    }
    interface Market {
        id: number;
        template: number;
        hasSpecial: boolean;
        isMain?: boolean;
        odds: any;
        groupId?: number;
        paramA?: string;
        participant?: number;
        isScore?: boolean;
        seperateByMarket?: boolean;
        paramB?: string;
    }
}
declare module BetplayModel {
    interface RootObject {
        betOffers: BetOffer[];
        events: Event[];
    }

    interface Event {
        id: number;
        name: string;
        englishName: string;
        homeName: string;
        awayName: string;
        start: string;
        group: string;
        groupId: number;
        path: Path[];
        nonLiveBoCount: number;
        sport: string;
        tags: string[];
        state: string;
        participants: Participant[];
        groupSortOrder: number;
        prematchEnd: string;
    }

    interface Participant {
        participantId: number;
        name: string;
        scratched: boolean;
        nonRunner: boolean;
        participantType: string;
    }

    interface Path {
        id: number;
        name: string;
        englishName: string;
        termKey: string;
    }

    interface BetOffer {
        id: number;
        closed: string;
        criterion: Criterion;
        betOfferType: BetOfferType;
        eventId: number;
        outcomes: Outcome[];
        tags: string[];
        cashOutStatus: string;
        extra?: string;
        scorerType?: ScorerType;
        combinableOutcomes?: CombinableOutcomes;
    }

    interface CombinableOutcomes {
        playerOutcomes: PlayerOutcome[];
        resultOutcomes: ResultOutcome[];
        outcomeCombinations: OutcomeCombination[];
    }

    interface OutcomeCombination {
        odds: number;
        oddsFractional: string;
        oddsAmerican: string;
        playerOutcome: PlayerOutcome;
        resultOutcome: ResultOutcome;
    }

    interface ResultOutcome {
        id: number;
        label: string;
        englishLabel: string;
        type: string;
        betOfferId: number;
        changedDate: string;
        status: string;
        cashOutStatus: string;
        homeScore?: string;
        awayScore?: string;
    }

    interface PlayerOutcome {
        id: number;
        label: string;
        englishLabel: string;
        participant: string;
        type: string;
        homeTeamMember: boolean;
        betOfferId: number;
        changedDate: string;
        participantId: number;
        status: string;
        cashOutStatus: string;
    }

    interface ScorerType {
        type: number;
        name: string;
    }

    interface Outcome {
        id: number;
        label: string;
        englishLabel: string;
        odds?: number;
        line?: number;
        participant: string;
        type: string;
        betOfferId: number;
        changedDate: string;
        participantId: number;
        oddsFractional?: string;
        oddsAmerican?: string;
        status: string;
        cashOutStatus: string;
        eventParticipantId: number;
    }


    interface BetOfferType {
        id: number;
        name: string;
        englishName: string;
    }

    interface Criterion {
        id: number;
        label: string;
        englishLabel: string;
        order: number[];
        occurrenceType?: string;
        lifetime?: string;
        raceToValue?: number;
        occurrenceNumber?: number;
    }

}


declare module MelbetModel {
    interface RootObject {
        Error: string;
        ErrorCode: number;
        Guid: string;
        Id: number;
        Success: boolean;
        Value: Value[];
    }

    interface RootObject2 {
        Error: string;
        ErrorCode: number;
        Guid: string;
        Id: number;
        Success: boolean;
        Value: Value;
    }


    interface Value {
        CI: number;
        GC: number;
        L: string;
        LI: number;
        LR: string;
        SI: number;
        SN: string;
        SR: string;
        T?: number;
        CHIMG?: string;
        G: G[];
        GE: GE[];
    }

    interface GE {
        E: E[][];
        G: number;
    }

    interface E {
        C: number;
        P?: number;
        T: number;
        CE?: number;
    }
    interface G {
        CI: number;
        COI: number;
        HSI: boolean;
        I: number;
        MIO: MIO;
        MIS: MI[];
        N: number;
        O1: string;
        O1C: number;
        O1CT?: string;
        O1I: number;
        O1IMG: string[];
        O1IS: number[];
        O1R: string;
        O2: string;
        O2C: number;
        O2CT?: string;
        O2I: number;
        O2IMG: string[];
        O2IS: number[];
        O2R: string;
        S: number;
        SGI: string;
        SI: number;
        SS: number;
        SST: number;
        STI: string;
        B: number;
        SG: SG[];
    }

    interface SG {
        CI: number;
        EC: number;
        I: number;
        N: number;
        P: number;
        PN: string;
        SI: number;
        SS: number;
    }

    interface MI {
        K: number;
        V: string;
    }

    interface MIO {
        Loc: string;
        TSt: string;
    }
}
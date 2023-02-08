// tslint:disable-next-line:no-namespace
declare module MegaEventModel {
    export interface M2 {
        id: number;
        n: string;
        o: string;
        sbv: string;
    }

    export interface O {
        id: number;
        n: string;
        c: number;
        m: M2[];
    }

    export interface M {
        cs: boolean;
        o: O[];
        n: number;
        nm: number;
        brid: number;
        ati: string;
        hti: string;
        sid: number;
        cid: number;
        tid: number;
        mid: number;
        ec: number;
        at: string;
        ht: string;
        d: string;
    }

    export interface T {
        id: number;
        nc: string;
        nt: string;
        gItem: boolean;
        cid: number;
        cgid?: any;
        m: M[];
        o: any[];
    }

    export interface RootObject {
        id: number;
        n: string;
        is3way: boolean;
        t: T[];
    }
}

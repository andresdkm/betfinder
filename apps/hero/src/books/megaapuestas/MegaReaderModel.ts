declare module MegaReaderModel {

    export interface M {
        id: number;
        n: string;
        otoi: string;
        o: string;
        ord: number;
        col: number;
        sbv: string;
    }

    export interface O {
        id: number;
        n: string;
        c: number;
        ca: boolean;
        oti: string;
        m: M[];
    }

    export interface T {
        id: number;
        n: string;
        is: number;
        o: O[];
    }

    export interface RootObject {
        s?: any;
        t: T[];
        brid: number;
        ati?: any;
        hti?: any;
        mid: number;
        ec?: any;
        at?: any;
        ht?: any;
        d?: any;
    }

}

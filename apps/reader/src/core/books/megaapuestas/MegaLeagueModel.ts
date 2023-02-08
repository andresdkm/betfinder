declare module MegaLeagueModel {
    export interface I2 {
        id: number;
        n: string;
        ni: number;
        nm: number;
        no: number;
        c?: any;
        t: number;
        cs: boolean;
        i?: any;
    }

    export interface I {
        id: number;
        n: string;
        ni: number;
        nm: number;
        no: number;
        c: string;
        t: number;
        cs: boolean;
        i: I2[];
    }

    export interface S {
        id: number;
        n: string;
        ni: number;
        nm: number;
        no: number;
        c: string;
        t: number;
        cs: boolean;
        i: I[];
    }

    export interface RootObject {
        s: S[];
        ResponseMessage?: any;
        ResponseCode: number;
    }
}

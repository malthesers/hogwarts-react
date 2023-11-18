import { House } from "./House";

export interface Student {
    fullName: string,
    firstName: string,
    middleName: string | undefined,
    nickName: string | undefined,
    lastName: string,
    gender: 'Male' | 'Female',
    house: House,
    photo: `${string}.png`,
    bloodStatus: BloodStatus,
    captain: boolean,
    prefect: boolean,
    expelled: boolean,
    inquisitor: boolean,
    id: number
}

export type BloodStatus = 'Pure-blood' | 'Muggle-born' | 'Half-blood' | 'Squib'
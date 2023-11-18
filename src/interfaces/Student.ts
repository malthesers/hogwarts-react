export interface Student {
    fullName: string,
    firstName: string,
    middleName?: string | undefined,
    nickName?: string | undefined,
    lastName: string,
    gender: 'Male' | 'Female',
    house: StudentHouse,
    photo: `${string}.png`,
    bloodStatus: BloodStatus,
    captain: boolean,
    prefect: boolean,
    expelled: boolean,
    inquisitor: boolean,
    id?: number
}

export interface UnformattedStudent {
    fullname: string,
    gender: string,
    house: string
}

export type StudentHouse = 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw'

export type BloodStatus = 'Pure-blood' | 'Muggle-born' | 'Half-breed' | 'Half-blood' | 'Squib'
export type ReserveRequest = {
    userId: number;
    userName: String;
    email: String;
    password: String;
    phoneNumber: number;
}

export type ReserveDateRequest = {
    userId: number;
    reserveDate: Date;
    reserveStatus: number;
    reservePersons: number;
    reserveMemo: String;
    reserveCourse: String;
}

export type ReserveList = {
    userId: number;
    reserveId: number;
    userName: String;
    email: String;
    phoneNumber: number;
    reserveDate: Date;
    reserveStatus: number;
    reservePersons: String;
    reserveMemo: String;
    reserveCourse: String;
}
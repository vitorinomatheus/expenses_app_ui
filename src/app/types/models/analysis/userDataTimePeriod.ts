export default class UserAvrTimePeriod {
    id?: number;
    monthWeek?: number;
    weekDay?: number;

    constructor(
        public userId: number,
        public value: number
    ) { }
}
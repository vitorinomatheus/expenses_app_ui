import BaseModel from "../baseModel";

export default class UserAvrTimePeriod extends BaseModel{
    monthWeek?: number;
    weekDay?: number;

    constructor(
        public userId: number,
        public value: number
    ) {
        super();
    }
}
import BaseModel from "../baseModel";

export default class UserRelationSocialPeriod extends BaseModel {
    id?: number;

    constructor(
        public userId: number,
        public eventType: number,
        public monthWeek: number,
        public value: number
    ) {
        super();
    }
}
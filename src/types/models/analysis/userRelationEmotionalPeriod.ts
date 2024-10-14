import BaseModel from "../baseModel";

export default class UserRelationEmotionalPeriod extends BaseModel{

    constructor(
        public userId: number,
        public emotionalType: number,
        public value: number,
        public monthWeek: number
    ) {
        super();
    }
}
import BaseModel from "../baseModel";

export default class UserAvrEmotional extends BaseModel{
    constructor(
        public userId: number,
        public emotionType: number,
        public value: number
    ) {
        super();
    }
}
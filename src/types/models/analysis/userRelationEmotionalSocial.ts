import BaseModel from "../baseModel";

export default class UserRelationEmotionalSocial extends BaseModel {
    
    constructor(
        public userId: number,
        public socialType: number,
        public emotionalType: number,
        public value: number
    ) {
        super();
    }
}
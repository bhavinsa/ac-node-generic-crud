'use strict';

import {Column, Entity} from 'typeorm';
import { BaseModel } from '../framework/base.model';

@Entity()
export class UserModel extends BaseModel {
    @Column()
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}
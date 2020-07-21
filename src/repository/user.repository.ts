'use strict';

import { UserModel } from '../models/user.model';
import { Inject } from 'typescript-ioc';
import { MongoConnector } from '../database/mongo-connector';
import { Repository, EntityRepository } from 'typeorm';

/**
 * @author bhavin
 */
@EntityRepository(UserModel)
export class UserRepository extends Repository<UserModel> {

    @Inject
    protected dbMongo: MongoConnector;

    public getModel(schema: string): any {
        return Object.values(require(`../models/${schema}`))[0];
    }

    public userGet(schema: string, _id: string): Promise<any> {
        return this.dbMongo.connection.getRepository(this.getModel(schema)).findOne(_id);
    }

}

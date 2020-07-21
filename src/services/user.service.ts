'use strict';

import { UserModel } from '../models/user.model';
import { BaseService } from '../framework/base.service';
import { UserRepository } from '../repository/user.repository';
import { Inject } from 'typescript-ioc';

export class UserService extends BaseService<UserModel> {

    @Inject private userRepository: UserRepository;
    /**
     * All services of BaseService are inherited
     * To build the specific services of this layer just create them here
     */

    public getSchemaName() {
        return 'user.model';
    }

    public getData(_id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.userRepository.userGet(this.getSchemaName(), _id)
                .then(resolve)
                .catch(reject);
        });
    }

}

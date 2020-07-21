'use strict';

import { Inject } from 'typescript-ioc';
import { Path, GET, PathParam } from 'typescript-rest';
import * as Joi from 'joi';
import { BaseController } from '../framework/base.controller';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

@Path('/user')
export class UserController extends BaseController<UserModel> {

    /**
     * All constrollers of BaseController are inherited
     * To build the specific controller of this layer just create them here
     */

    constructor(@Inject protected userService: UserService) {
        super(userService);
    }

    public getValidationSchema(): Joi.Schema {
        return Joi.object().keys({
            name: Joi.string().required()
        });
    }

    public getEndpointPermission(): any {
        return {
            'list': true,
            'get': true,
            'create': true,
            'delete': true,
            'update': true
        };
    }

    @GET
    @Path('/getData/:id')
    public getData(@PathParam('id') _id: string): Promise<any> {
        return new Promise<string>((resolve, reject) => {
            this.userService.getData(_id).then(resolve)
                .catch(reject);
        });
    }

}

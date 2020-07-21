'use strict';

import { Path } from 'typescript-rest';
import * as Joi from 'joi';
import { BaseController } from '../framework/base.controller';
import { UserModel } from '../models/user.model';

/**
 * @author bhavin
 * This class was created to increase test coverage
 */
@Path('/permission')
export class PermissionController extends BaseController<UserModel> {

    public getValidationSchema(): Joi.Schema {
        return null;
    }

    public getEndpointPermission(): any {
        return {
            'list': false,
            'get': false,
            'create': false,
            'delete': false,
            'update': false
        };
    }

}

import { UserService } from '../src/services/user.service';
import { UserController } from '../src/controllers/user.controller';
import { PermissionController } from '../src/controllers/permission.controller';

describe('Instance Objects Test', () => {
	describe('Sample object instance', () => {
		it('should instantiate sample objects', async (done) => {
			const sampleService = new UserService();
			const UserController = new UserController(sampleService);
			UserController.getValidationSchema();
			UserController.getEndpointPermission();
			sampleService.getSchemaName();	
			done();
		});
	});

	describe('Permission object instance', () => {
		it('should instantiate permission objects', async (done) => {
			const permissionController = new PermissionController(null);
			permissionController.getValidationSchema();
			permissionController.getEndpointPermission();
			done();
		});
	});
});
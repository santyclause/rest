import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations');
    this.router
      .get('', this.getAllLocations)
      .get('/:locationId/missions', this.getMissionsByLocation)
  }

  async getAllLocations(request, response, next) {
    try {
      const locations = await locationsService.getAllLocations();
      response.send(locations);
    } catch (error) {
      next(error);
    }
  }

  async getMissionsByLocation(request, response, next) {
    try {
      const locId = request.params.locationId;
      const locations = await missionsService.getMissionsByLocation(locId);
      response.send(locations);
    } catch (error) {
      next(error);
    }
  }
}
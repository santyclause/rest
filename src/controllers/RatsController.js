import { dbContext } from "../db/DbContext.js";
import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getAllRats)
      .get('/:ratId/missions', this.getMissionsByRat)
  }

  async getAllRats(request, response, next) {
    try {
      const rats = await ratsService.getAllRats();
      response.send(rats)
    } catch (error) {
      next(error);
    }
  }

  async getMissionsByRat(request, response, next) {
    try {
      const ratId = request.params.ratId;
      const missions = await missionsService.getMissionsByRat(ratId);
      response.send(missions);
    } catch (error) {
      next(error);
    }
  }
}
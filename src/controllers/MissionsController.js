import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions');
    this.router
      .get('', this.getAllMissions)
      .post('', this.createMission)
      .put('/:missionId', this.updateMission)
  }

  async getAllMissions(request, response, next) {
    try {
      const missions = await missionsService.getAllMissions();
      response.send(missions);
    } catch (error) {
      next(error);
    }
  }

  async createMission(request, response, next) {
    try {
      const missionData = request.body;
      const mission = await missionsService.createMission(missionData);
      response.send(mission)
    } catch (error) {
      next(error);
    }
  }

  async updateMission(request, response, next) {
    try {
      const missionId = request.params.missionId;
      const updateData = request.body;
      const mission = await missionsService.updateMission(missionId, updateData)

      response.send(mission);
    } catch (error) {
      next(error);
    }
  }
}
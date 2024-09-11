import { dbContext } from "../db/DbContext.js";

class MissionsService {


  async getAllMissions() {
    const missions = await dbContext.Missions.find().populate('rat', '-name -picture').populate('location');
    return missions;
  }

  async getMissionsByRat(ratId) {
    const missions = await dbContext.Missions.find({ ratId: ratId }).populate('rat', '-name -picture').populate('location');
    return missions;
  }

  async getMissionsByLocation(locationId) {
    const missions = await dbContext.Missions.find({ locationId: locationId }).populate('rat', '-name -picture').populate('location');
    return missions;
  }

  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData);
    await mission.populate('rat', '-name -picture');
    await mission.populate('location');

    return mission;
  }
}

export const missionsService = new MissionsService();
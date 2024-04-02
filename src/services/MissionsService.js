import { dbContext } from "../db/DbContext.js"



class MissionsService {
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('location rat')
    return missions
  }
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat location')
    return mission
  }
  async updateMission(updateData) {
    const original = await dbContext.Missions.findById(updateData.id)
    if (!original) throw new Error(`No mission with id: ${updateData.id}`)
    original.ratId = updateData.ratId ? updateData.ratId : original.ratId
    original.locationId = updateData.locationId ? updateData.locationId : original.locationId
    original.codename = updateData.codename ? updateData.codename : original.codename
    original.objective = updateData.objective ? updateData.objective : original.objective
    original.completed = updateData.completed ? updateData.completed : original.completed
    await original.save()
    await original.populate('rat location')
    return original
  }
  async getRatMissions(ratId) {
    const missions = await dbContext.Missions.find({ ratId }).populate('location')
    return missions
  }

  async getLocationMissions(locationId) {
    const missions = await dbContext.Missions.find({ locationId }).populate('rat')
    return missions
  }

}

export const missionsService = new MissionsService()

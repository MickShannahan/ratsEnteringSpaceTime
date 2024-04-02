import { dbContext } from "../db/DbContext.js"


class RatsService {
  async getRats() {
    const rats = await dbContext.Rats.find().populate('completedMissions')
    return rats
  }

}

export const ratsService = new RatsService()

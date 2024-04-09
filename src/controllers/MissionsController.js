import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { missionsService } from "../services/MissionsService.js";




export class MissionsController extends BaseController {
  constructor() {
    super("api/missions")
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getMissions)
      .post('', this.createMission)
      .put('/:missionId', this.updateMission)
  }

  async getMissions(req, res, next) {
    try {
      const missions = await missionsService.getMissions()
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }

  async createMission(req, res, next) {
    try {
      const missionData = req.body
      missionData.id = req.params.id
      const mission = await missionsService.createMission(missionData)
      res.send(mission)
    } catch (error) {
      next(error)
    }
  }

  async updateMission(req, res, next) {
    try {
      const updateData = req.body
      updateData.id = req.params.missionId
      const updatedMission = await missionsService.updateMission(updateData)
      res.send(updatedMission)
    } catch (error) {
      next(error)
    }
  }
}

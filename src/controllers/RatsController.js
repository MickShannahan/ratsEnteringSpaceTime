import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { ratsService } from "../services/RatsService.js"
import { missionsService } from "../services/MissionsService.js"



export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:ratId/missions', this.getRatMissions)
  }

  async getRats(req, res, next) {
    try {
      const rats = await ratsService.getRats()
      res.send(rats)
    } catch (error) {
      next(error)
    }
  }

  async getRatMissions(req, res, next) {
    try {
      const ratId = req.params.ratId
      const missions = await missionsService.getRatMissions(ratId)
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }
}

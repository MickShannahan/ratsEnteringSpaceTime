import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";



export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:locationId/missions', this.getLocationMissions)
  }

  async getLocations(req, res, next) {
    try {
      const locations = await locationsService.getLocations()
      res.send(locations)
    } catch (error) {
      next(error)
    }
  }

  async getLocationMissions(req, res, next) {
    try {
      const missions = await missionsService.getLocationMissions(req.params.locationId)
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }
}

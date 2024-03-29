import BaseController from "../utils/BaseController.js"



export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('')
      .get(':ratId')
      .get(':ratId/missions')
  }
}

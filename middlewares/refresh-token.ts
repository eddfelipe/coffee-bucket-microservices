import { Request, Response, NextFunction } from "express";

import HandlerSalesForce from "../controllers/salesforce/HandlerSalesForce";
import { ResponseSF } from "../helpers/interfaces";

const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    const sf = new HandlerSalesForce();
    await sf.createToken();
    next();
}

export default refreshToken;
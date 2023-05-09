import { Request, Response } from "express";

import { ParamsAccount } from '../../helpers/interfaces'
import { doctors } from './services';
import HandlerSalesForce from "../salesforce/HandlerSalesForce";

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */ 
export const getRepresentative = async (req: Request, res: Response) => {
    const { date }: any = req.query;    
    try {
        return res.json({
            body: {
                date
            }
        })
        
    } catch (error) {
        return res.status(400).json({
            body: {
                message: error
            }
        });
    }
}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const getDoctors = async (req: Request, res: Response) => {
    const data:ParamsAccount = req.query;
    const account = await doctors(data);
    try {
        return res.json({
            body: {
                account
            }
        })
    } catch (error) {
        return res.status(400).json({
            body: {
                message: error
            }
        });
    }
}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const Token = async (req: Request, res: Response) => {
    const sf = new HandlerSalesForce();
    await sf.createToken();
    const token = await sf.getToken();
    try {
        return res.json(token)
    } catch (error) {
        return res.status(400).json({
            body: {
                message: error
            }
        });
    }
}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const createProgramRequest = async(req: Request, res: Response) => {
    const body = req.body;
    const sf = new HandlerSalesForce();
    const program = await sf.postSF(body, 'Program_Request__c');
    try {
        return res.json({
            body: {
                program
            }
        })
    } catch (error) {
        return res.status(400).json({
            body: {
                message: error
            }
        });
    }
}
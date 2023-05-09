import { Request, Response } from "express";

import HandlerMailchimp from '../mailchimp/HandlerMailchimp';

export const getList = async (req: Request, res: Response) => {
    const { date }: any = req.query;
    try {
        
        return res.json({
            body: 'schedule'
        })
        
    } catch (error) {
        return res.status(400).json({
            body: {
                message: error
            }
        });
    }
}

export const postMember = async (req: Request, res: Response) => {
    const { email_address, status, FNAME, LNAME, tags } = req.body;
    try {
        const call = new HandlerMailchimp();
        const member = await call.addMember({
            email_address,
            status,
            fullname: `${FNAME} ${LNAME}`,
            language: 'es',
            merge_fields: { 
                FNAME, 
                LNAME
            },
            tags
        });
        return res.json({
            code:200,
            body: member,
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            code: 400,
            body: error,
        });
    }
}
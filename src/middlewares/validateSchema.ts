import joi, {ObjectSchema} from 'joi'
import { NextFunction, Request, Response} from 'express'

export const validateSchema = (schema:ObjectSchema) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {

        } catch (err) {

        }
    }
}
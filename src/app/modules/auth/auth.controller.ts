import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const user = req.body;

        const result = await AuthService.createUser(user);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User created successfully',
            data: result
        })
    }
);

const signIn: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;

        const result = await AuthService.signIn(payload);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User signed in  successfully',
            data: result
        })
    }
);

export const AuthController = {
    createUser,
    signIn
}
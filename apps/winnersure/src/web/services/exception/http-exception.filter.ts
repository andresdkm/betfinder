import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const data = exception.getResponse();
        let error = null;
        if (typeof data === 'object') {
            // @ts-ignore
            error = data.error;
        }
        response
            .status(status)
            .json({
                success: false,
                message: error ? error : data,
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}

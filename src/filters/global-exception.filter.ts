import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from 'winston';
import { Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = exception instanceof Error ? 500 : 400;

    const message =
      exception instanceof Error ? exception.message : 'Unknown error';

    this.logger.error(`Exception thrown: ${message}`, {
      path: request.url,
      body: request.body,
    });

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

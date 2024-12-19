import { Injectable, Inject } from '@nestjs/common';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, headers, body } = request;

    const user = request.user ? request.user.id : null;

    this.logger.info('Request:', {
      user,
      method,
      url,
      headers,
      body,
    });

    return next.handle().pipe(
      tap((data) => {
        this.logger.info('Response:', {
          user,
          method,
          url,
          data,
        });
      }),
    );
  }
}

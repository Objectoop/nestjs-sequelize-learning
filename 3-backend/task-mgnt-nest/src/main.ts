import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['log', 'error', 'warn', 'debug', 'verbose'], 
  });

  app.setGlobalPrefix('api/v1');
  console.log('Application is starting...');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

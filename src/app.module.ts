import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://<>:<>@clustercrud.vbejlip.mongodb.net/?retryWrites=true&w=majority'),
TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

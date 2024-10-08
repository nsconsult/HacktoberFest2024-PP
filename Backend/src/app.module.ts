import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_URI =
  'mongodb+srv://nsconsult:hacktoberfest2024@hacktoberfestcluster.dkgh9.mongodb.net/odoApp?retryWrites=true&w=majority&appName=hacktoberfestcluster';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

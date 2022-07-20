import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import { ServeStaticModule } from '@nestjs/serve-static';

import * as path from 'path';

@Module({
  imports: [
    TrackModule,
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.bmcr6.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}

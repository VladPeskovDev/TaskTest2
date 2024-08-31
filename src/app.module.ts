import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';

const env = require('dotenv');
env.config();

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadModels: true,
    synchronize: true,
  }),
  UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

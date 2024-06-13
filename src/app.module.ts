import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import { User } from './user/entities/user.entity';
import ormConfig from './config/ormPsqlconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

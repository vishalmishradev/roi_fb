import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { MetaModule } from './meta/meta.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DashboardModule,
    MetaModule,
    AuthModule,
  ],
})
export class AppModule {}
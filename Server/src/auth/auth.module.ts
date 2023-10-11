import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthMiddleWare } from "./auth.middleware";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { DatabaseModule } from "src/database/dataabase.module";
import { authProviders } from "./auth.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...authProviders]
})
export class AuthModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleWare).forRoutes('auth');
  }
}
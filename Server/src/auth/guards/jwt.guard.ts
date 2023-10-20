import { 
  CanActivate, 
  ExecutionContext, 
  Injectable, 
  UnauthorizedException 
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorators/public.decorator';

@Injectable()
export class JwtGuard implements CanActivate{
  constructor(
    private jwtService: JwtService, 
    private reflector: Reflector
  ){}
  
  async canActivate(
    context: ExecutionContext
  ):Promise<boolean>{

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // 💡 See this condition
      return true;
    }
    
    const request= context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
    if(!token) { 
      throw new UnauthorizedException(); 
    }
    
    try {
      const payload = await this.jwtService.verifyAsync(
        token,{
          secret: process.env.JWT_SECRET_KEY
        }
      );
      console.log(payload);
      request['user'] = payload;
    } catch (error) {
      throw  new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request){
    const [type, token] = request.headers.authorization?.split(' ')?? [];
    return type === 'Bearer' ? token : null; 
  }
}
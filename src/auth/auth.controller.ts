import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: any) {
    return {
      success: true,
      accessToken: 'mock-access-token',
      user: {
        id: 1,
        email: body.email,
        name: 'Demo User',
      },
    };
  }
}
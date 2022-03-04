import { Body, Controller, Post } from '@nestjs/common';
import { userDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    signup(@Body() dto: userDto) {
        return this.authService.signup(dto);
    }
    @Post('/login')
    signing(@Body() dto: userDto) {

        return this.authService.login(dto);
    }
}

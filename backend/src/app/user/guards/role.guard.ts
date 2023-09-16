// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const roles = this.reflector.get<string[]>('roles', context.getHandler());
//     console.log({ context });
//     console.log({ roles });

//     if (!roles) {
//       return true;
//     }
//     const request = context.switchToHttp().getRequest();
//     console.log(request);
//     const user = request.role; // User object from JWT payload
//     console.log({ user });
//     return roles.includes(user.role);
//   }
// }

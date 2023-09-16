// // import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// // export const Roles = createParamDecorator(
// //   (data: string, ctx: ExecutionContext) => {
// //     const request = ctx.switchToHttp().getRequest();
// //     const user = request.user; // Assuming you have a 'user' property in your JWT payload
// //     console.log({ myuser: user });
// //     return data ? user && user[data] : user;
// //   },
// // );

// import { SetMetadata } from '@nestjs/common';

// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

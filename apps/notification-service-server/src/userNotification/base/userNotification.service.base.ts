/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  UserNotification as PrismaUserNotification,
} from "@prisma/client";

export class UserNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserNotificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userNotification.count(args);
  }

  async userNotifications(
    args: Prisma.UserNotificationFindManyArgs
  ): Promise<PrismaUserNotification[]> {
    return this.prisma.userNotification.findMany(args);
  }
  async userNotification(
    args: Prisma.UserNotificationFindUniqueArgs
  ): Promise<PrismaUserNotification | null> {
    return this.prisma.userNotification.findUnique(args);
  }
  async createUserNotification(
    args: Prisma.UserNotificationCreateArgs
  ): Promise<PrismaUserNotification> {
    return this.prisma.userNotification.create(args);
  }
  async updateUserNotification(
    args: Prisma.UserNotificationUpdateArgs
  ): Promise<PrismaUserNotification> {
    return this.prisma.userNotification.update(args);
  }
  async deleteUserNotification(
    args: Prisma.UserNotificationDeleteArgs
  ): Promise<PrismaUserNotification> {
    return this.prisma.userNotification.delete(args);
  }
}

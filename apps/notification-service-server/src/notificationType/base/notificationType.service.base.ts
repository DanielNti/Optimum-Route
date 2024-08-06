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
  NotificationType as PrismaNotificationType,
} from "@prisma/client";

export class NotificationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.NotificationTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.notificationType.count(args);
  }

  async notificationTypes(
    args: Prisma.NotificationTypeFindManyArgs
  ): Promise<PrismaNotificationType[]> {
    return this.prisma.notificationType.findMany(args);
  }
  async notificationType(
    args: Prisma.NotificationTypeFindUniqueArgs
  ): Promise<PrismaNotificationType | null> {
    return this.prisma.notificationType.findUnique(args);
  }
  async createNotificationType(
    args: Prisma.NotificationTypeCreateArgs
  ): Promise<PrismaNotificationType> {
    return this.prisma.notificationType.create(args);
  }
  async updateNotificationType(
    args: Prisma.NotificationTypeUpdateArgs
  ): Promise<PrismaNotificationType> {
    return this.prisma.notificationType.update(args);
  }
  async deleteNotificationType(
    args: Prisma.NotificationTypeDeleteArgs
  ): Promise<PrismaNotificationType> {
    return this.prisma.notificationType.delete(args);
  }
}

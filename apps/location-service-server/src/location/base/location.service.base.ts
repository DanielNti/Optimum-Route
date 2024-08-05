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
  Location as PrismaLocation,
  Landmark as PrismaLandmark,
} from "@prisma/client";

export class LocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LocationCountArgs, "select">): Promise<number> {
    return this.prisma.location.count(args);
  }

  async locations(
    args: Prisma.LocationFindManyArgs
  ): Promise<PrismaLocation[]> {
    return this.prisma.location.findMany(args);
  }
  async location(
    args: Prisma.LocationFindUniqueArgs
  ): Promise<PrismaLocation | null> {
    return this.prisma.location.findUnique(args);
  }
  async createLocation(
    args: Prisma.LocationCreateArgs
  ): Promise<PrismaLocation> {
    return this.prisma.location.create(args);
  }
  async updateLocation(
    args: Prisma.LocationUpdateArgs
  ): Promise<PrismaLocation> {
    return this.prisma.location.update(args);
  }
  async deleteLocation(
    args: Prisma.LocationDeleteArgs
  ): Promise<PrismaLocation> {
    return this.prisma.location.delete(args);
  }

  async findLandmarks(
    parentId: string,
    args: Prisma.LandmarkFindManyArgs
  ): Promise<PrismaLandmark[]> {
    return this.prisma.location
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .landmarks(args);
  }
}

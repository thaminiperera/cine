import { db } from "@/db";
import { subscriptions } from "@/db/schema";

import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import { z } from "zod";

export const SubscriptionsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ userId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = input;

      //user can't subscribe to one's own channel
      if (userId === ctx.user.id) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const [createdSubscription] = await db
        .insert(subscriptions)
        .values({ viewerId: ctx.user.id, creatorId: userId })
        .returning();

      return createdSubscription;
    }),
  remove: protectedProcedure
    .input(z.object({ userId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = input;

      //user can't subscribe to one's own channel
      if (userId === ctx.user.id) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const [deletedSubscription] = await db
        .delete(subscriptions)
        .where(and(eq(subscriptions.viewerId, ctx.user.id), eq(subscriptions.creatorId, userId)))
        .returning();

      return deletedSubscription;
    }),
});

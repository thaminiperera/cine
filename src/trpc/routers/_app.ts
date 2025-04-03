import { createTRPCRouter } from "../init";

import { studioRouter } from "@/modules/studio/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";
import { videoViewsRouter } from "@/modules/video-views/server/procedures";
import { videoReactionsRouter } from "@/modules/video-reactions/server/procedures";
import { SubscriptionsRouter } from "@/modules/suscriptions/server/procedures";
import { commentsRouter } from "@/modules/comments/server/procedures";
import { commentReactionsRouter } from "@/modules/comment-reactions/server/procedures";
import { suggestionsRouter } from "@/modules/suggestions/server/procedures";
import { searchRouter } from "@/modules/search/server/procedures";
import { playlistsRouter } from "@/modules/playlists/server/procedures";
import { usersRouter } from "@/modules/users/server/procedures";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
  users: usersRouter,
  search : searchRouter,
  comments: commentsRouter,
  playlists: playlistsRouter,
  videoViews: videoViewsRouter,
  videoReactions: videoReactionsRouter,
  subscriptions: SubscriptionsRouter,
  commentReactions: commentReactionsRouter,
  suggestions: suggestionsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;

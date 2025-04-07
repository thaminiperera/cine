import { DEFAULT_LIMIT } from "@/constants";
import { SubscriptionsView } from "@/modules/suscriptions/ui/views/subscriptions-view";
import { HydrateClient, trpc } from "@/trpc/server";

const page = () => {
    void trpc.subscriptions.getMany.prefetchInfinite({
        limit: DEFAULT_LIMIT
    })
  return <HydrateClient><SubscriptionsView/></HydrateClient>;
};

export default page;

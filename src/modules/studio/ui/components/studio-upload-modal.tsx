"use client";
import { ResponsiveModal } from "@/components/responsive-modal";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { toast } from "sonner";
import { StudioUploader } from "./studio-uploader";
import { useRouter } from "next/navigation";

export const StudioUploadModal = () => {
  const router = useRouter()
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video Created!");
      utils.studio.getMany.invalidate();
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  const onSuccess = () => {
    if(!create.data?.video.id) return;
    create.reset()
    router.push(`/studio/videos/${create.data.video.id}`)
  }
  return (
    <>
      <ResponsiveModal
        title="Upload a Video"
        open={!!create.data?.url}
        onOpenChange={() => create.reset()}
      >
        {create.data?.url ? <StudioUploader endpoint={create.data.url} onSuccess={onSuccess}/> : <Loader2Icon/>}
      </ResponsiveModal>
      <Button
        variant="secondary"
        onClick={() => create.mutate()}
        disabled={create.isPaused}
      >
        {create.isPending ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <PlusIcon />
        )}{" "}
        Create
      </Button>
    </>
  );
};

import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone } from "@/lib/uploadthing";
import { trpc } from "@/trpc/client";

interface ThumbnailUploadModalInterface {
  videoId: string;
  open: boolean;
  onOpenchange: (open: boolean) => void;
}

export const ThumbnailUploadModal = ({
  videoId,
  onOpenchange,
  open,
}: ThumbnailUploadModalInterface) => {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.studio.getMany.invalidate();
    utils.studio.getOne.invalidate({ id: videoId });
    onOpenchange(false);
  };

  return (
    <ResponsiveModal
      title="Upload a thumbnail"
      open={open}
      onOpenChange={onOpenchange}
    >
      <UploadDropzone
        endpoint="thumbnailUploader"
        input={{ videoId }}
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveModal>
  );
};

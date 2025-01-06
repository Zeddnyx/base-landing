import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import styles from "@styles/component/c-dialog.module.css";
import CloseDialog from "./close-dialog";

const CModal = ({
  open,
  setIsOpen,
  height = "h-[70vh]",
  width = "w-[70vw]",
  children,
  showHeader = true,
  headerTitle,
  paddingContent = true,
  headerClassName,
}: CModal) => {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn(
          styles.modal_wrap_content,
          height,
          width,
          !paddingContent && "!p-0",
        )}
      >
        {showHeader && (
          <DialogHeader>
            <DialogTitle
              className={cn(
                styles.modal_dialog_title,
                headerClassName,
                !paddingContent && "!p-5",
              )}
            >
              {headerTitle}
            </DialogTitle>
            <CloseDialog />
          </DialogHeader>
        )}

        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default CModal;
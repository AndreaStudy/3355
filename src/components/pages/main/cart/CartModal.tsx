import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function CartModal({
  open,
  onClose,
  handleDeleteList,
  className,
  title,
  description,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
}: {
  open: boolean;
  onClose: () => void;
  handleDeleteList: (isAllorSelected: boolean) => void;
  className?: string;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
}) {
  const handleDeleteConfirmAction = () => {
    handleDeleteList(true);
    onClose();
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className={className}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-center items-center gap-2">
          <AlertDialogCancel onClick={onClose}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteConfirmAction}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

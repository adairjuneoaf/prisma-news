import toast from "react-hot-toast";

export function notificationSuccess(message: string) {
  toast.success(`${message}`);
}

export function notificationError(message: string) {
  toast.error(`${message}`);
}

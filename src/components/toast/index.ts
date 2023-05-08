import { ToastStatusEnum } from "./toast";

const warn = (item: any) => {
  setItemToSession({ ...item, type: ToastStatusEnum.Warn });
};

const info = (item: any) => {
  setItemToSession({ ...item, type: ToastStatusEnum.Info });
};

const success = (item: any) => {
  setItemToSession({ ...item, type: ToastStatusEnum.Success });
};

const error = (item: any) => {
  setItemToSession({ ...item, type: ToastStatusEnum.Error });
};

const getToastFromSession = () => {
  return sessionStorage.getItem("toast-container");
};

const setItemToSession = (item: any) => {
  const newData = {
    ...item,
    code: new Date().getTime().toString(),
  };

  const currentData = getToastFromSession();

  if (currentData) {
    const data = JSON.parse(currentData).filter((item: any) => {
      return item;
    });

    sessionStorage.setItem(
      "toast-container",
      JSON.stringify([newData, ...data])
    );
  } else {
    sessionStorage.setItem("toast-container", JSON.stringify([newData]));
  }

  window.dispatchEvent(new Event("toast-container-changed"));
};

const reset = () => {
  sessionStorage.setItem("toast-container", "");
};

const removeToast = (code: string) => {
  let data = getToastFromSession();

  if (!data) {
    return;
  }

  if (data) {
    data = JSON.parse(data).filter((item: any) => {
      return item.code !== code;
    });
  }

  sessionStorage.setItem("toast-container", JSON.stringify(data));
  window.dispatchEvent(new Event("toast-container-changed"));
};

export const toast = {
  warn,
  info,
  success,
  error,
  reset,
  removeToast,
};

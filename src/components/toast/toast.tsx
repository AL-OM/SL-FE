import { useEffect, useMemo, useState } from "react";
import React from "react";
import { toast } from ".";

export enum ToastStatusEnum {
  Success = 0,
  Warn,
  Error,
  Info,
}

interface AlertInfoModel {
  title: string;
  code: string;
  description: string;
  type: ToastStatusEnum;
  timeout: boolean;
}

interface ComponentProps {
  toast: AlertInfoModel;
  right?: boolean;
  duration: number;
}

type Props = ComponentProps;

const ToastComponent: React.FunctionComponent<Props> = (props) => {
  const [timer, setTimer] = useState<number>(props.duration || 5000);

  const [timerOut, setTimerOut] = useState<NodeJS.Timeout>();

  const getColor = useMemo(() => {
    switch (props.toast.type) {
      case ToastStatusEnum.Success:
        return "bg-green-100 mt-2 border-t-4 border-green-500 rounded-b text-green-900";

      case ToastStatusEnum.Info:
        return "bg-teal-100 mt-2 border-t-4 border-teal-500 rounded-b text-teal-900";

      case ToastStatusEnum.Error:
        return "bg-red-100 mt-2 border-t-4 border-red-500 rounded-b text-red-900";

      case ToastStatusEnum.Warn:
        return "bg-amber-100 mt-2 border-t-4 border-amber-500 rounded-b text-amber-900";

      default:
        return "";
    }
  }, [props.toast]);

  useEffect(() => {
    setTimerOut(
      setInterval(() => {
        setTimer((timer) => timer - 1000);
      }, 1000)
    );

    return () => {
      if (timerOut) {
        clearTimeout(timerOut);
        setTimer(0);
      }
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimeout(() => {
        toast.removeToast(props.toast.code);
      }, 500);
    }
  }, [timer]);

  const onCloseClick = () => {
    setTimer(0);
    if (timerOut) clearInterval(timerOut);
  };

  const renderIcon = (): React.ReactElement => {
    // swichcase to render optional icon
    return (
      <svg
        className="fill-current h-6 w-6 text-teal-500 mr-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
      </svg>
    );
  };

  const renderCloseIcon = (): React.ReactElement => {
    return (
      <div
        className={"flex justify-items-center absolute top-2 right-2"}
        onClick={onCloseClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          height={20}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
    );
  };

  // ---DEV
  console.log("---DEV");

  const containerStyle = useMemo(() => {
    const animationClass =
      timer > 0
        ? `${props.right ? "animate-toast-right" : "animate-toast-left"}`
        : `${`animate-toast-slide-out-${props.right ? "right" : "left"}`}`;

    return `${getColor} px-4 py-3 flex flex-row relative unselectable cursor-pointer ${animationClass}`;
  }, [getColor, props.right, timer]);

  return (
    <div className={containerStyle} role="alert">
      <div className="flex">
        <div className="py-1">{renderIcon()}</div>
        <div>
          <p className="font-bold">{props.toast.title}</p>
          <p className="text-sm">{props.toast.description}</p>
        </div>
      </div>
      {renderCloseIcon()}
    </div>
  );
};

export default React.memo(ToastComponent);

import { useEffect, useMemo, useState } from "react";
import ToastComponent from "./toast";
import { toast } from ".";

export enum ToastStatusEnum {
  Success = 0,
  Warn,
  Error,
  Info,
}

export enum ToastPositonEnum {
  TopLeft = 0,
  TopRight,
  BottomLeft,
  BottomRight,
}

interface ComponentProps {
  duration: number;
  position: ToastPositonEnum;
}

type Props = ComponentProps;

const ToastContainer: React.FunctionComponent<Props> = (props) => {
  const [toastList, setToastList] = useState<any[]>([]);

  useEffect(() => {
    toast.reset();

    window.addEventListener("toast-container-changed", onSessionChanged);
    return () => {
      window.removeEventListener("toast-container-changed", onSessionChanged);
    };
  }, []);

  const onSessionChanged = (event: any) => {
    const dataTemp = sessionStorage.getItem("toast-container");

    if (dataTemp) {
      const data = JSON.parse(dataTemp);

      setToastList(data as any);
    }
  };

  const getPositions = useMemo(() => {
    switch (props.position) {
      case ToastPositonEnum.TopLeft:
        return "top-2 left-2";

      case ToastPositonEnum.TopRight:
        return "top-2 right-2";

      case ToastPositonEnum.BottomLeft:
        return "bottom-2 left-2 reserve";

      case ToastPositonEnum.BottomRight:
        return "bottom-2 right-2";
      default:
        return "";
    }
  }, [props.position]);

  return (
    <div className={`${getPositions} absolute overflow-hidden z-50`}>
      {toastList.map((item) => {
        return (
          <ToastComponent
            toast={item}
            key={item.code}
            right={
              props.position === ToastPositonEnum.TopRight ||
              props.position === ToastPositonEnum.BottomRight
            }
            duration={props.duration}
          />
        );
      })}
    </div>
  );
};

export default ToastContainer;

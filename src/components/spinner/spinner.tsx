import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../core/store";

interface ComponentProps {
  show?: boolean;
}

type Props = ComponentProps;

const Spinner: React.FunctionComponent<Props> = ({ show = false }) => {
  const appReducer = useSelector((state: AppState) => state.app);

  if (appReducer.isEnabledSpinner || show) {
    return (
      <div className="loadingio-spinner-double-ring-13ws511362ic">
        <div className="ldio-wax94xnk6gr">
          <div />
          <div />
          <div>
            <div />
          </div>
          <div>
            <div />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Spinner;

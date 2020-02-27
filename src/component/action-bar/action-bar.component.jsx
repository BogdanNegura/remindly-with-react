import React from "react";
import { Button } from "../button";
import moment from "moment";
import { StyledActionBar } from "./action-bar.style";

const ActionBar = () => {
  const selectedMonth = moment().format("MMMM YYYY");
  return (
    <StyledActionBar>
      <Button label="Create">
        <i className="remindly-pencil"></i>
      </Button>
      <Button label="Today">
        <i className="remindly-calendar"></i>
      </Button>
      <Button label="">
        <i className="remindly-backward"></i>
      </Button>
      <Button label="">
        <i className="remindly-forward"></i>
      </Button>
      <div>{selectedMonth}</div>
    </StyledActionBar>
  );
};

export { ActionBar };

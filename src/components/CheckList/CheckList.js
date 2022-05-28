import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function CheckList() {
  return (
    <>
      {props.checkList.map((item, index) => {
        return (
          <FormGroup>
            <FormControlLabel
              id={"checkItem" + item.label}
              name={item.label}
              control={<Checkbox defaultChecked={item.check} />}
              label={item.label}
              disabled={item.disabled ? true : false}
            />
          </FormGroup>
        );
      })}
    </>
  );
}

export default CheckList;

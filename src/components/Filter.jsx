import React from "react";
import { useAtom } from "jotai";
import { filterAtom } from "../state/atoms";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { filterMap } from "./../state/atoms";

const Filter = () => {
  const [filter, set] = useAtom(filterAtom);
  return (
    <Paper variant="outlined" sx={{ padding: "1em", borderRadius: "0.5em" }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={filterMap.all}
        name="radio-buttons-group"
        onChange={(e) => set(e.target.value)}
        value={filter}
        row
        sx={{ justifyContent: "center" }}
      >
        <Typography
          id="demo-radio-buttons-group-label"
          paragraph
          sx={{ margin: "0 1em 0 0", alignSelf: "center" }}
        >
          Filter Todos
        </Typography>
        <FormControlLabel
          value={filterMap.all}
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          value={filterMap.done}
          control={<Radio />}
          label="Done"
        />
        <FormControlLabel value="" control={<Radio />} label="Incomplete" />
      </RadioGroup>
    </Paper>
  );
};

export default Filter;

import { useCallback, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const schema = yup
  .object({
    title: yup
      .string()
      .required("required field")
      .min(2, "must be between 2-20 characters long")
      .max(20, "must be between 2-20 characters long"),
    duration: yup
      .string()
      .required("required field")
      .min(2, "must be between 2-10 characters long")
      .max(10, "must be between 2-10 characters long"),
    done: yup.boolean().default(false).required(),
  })
  .required();

const defaultValues = {
  title: "",
  duration: "",
  done: false,
};

const TodoForm = ({ todo, handler } = {}) => {
  const {
    control,
    reset,
    handleSubmit,
    // getValues,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onChange`,
    initialValues: defaultValues,
  });

  useEffect(() => {
    if (todo) {
      reset(todo); // populate
    }
  }, []);

  const submitHandler = useCallback(
    (data) => {
      handler(data);
      reset();
    },
    [handler, reset]
  );

  return (
    <form onSubmit={handleSubmit(submitHandler)} style={{ textAlign: 'center'}}>
      <Stack spacing={2}>
        <div>
          <FormControl>
            {/* <InputLabel htmlFor="title">Title</InputLabel> */}
            <Controller
              name="title"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField {...field} label="Title" fullWidth />
              )}
            />
          </FormControl>
          {errors.title && (
            <InputLabel htmlFor="title" role="alert" sx={{ color: "red" }}>
              {errors.title.message}
            </InputLabel>
          )}
        </div>
        <div>
          <FormControl>
            {/* <InputLabel htmlFor="duration">Duration</InputLabel> */}
            <Controller
              name="duration"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField {...field} label="Duration" fullWidth />
              )}
            />
          </FormControl>
          {errors.duration && (
            <InputLabel htmlFor="duration" role="alert" sx={{ color: "red" }}>
              {errors.duration.message}
            </InputLabel>
          )}
        </div>
        <div>
          <FormControl>
            {/* <label htmlFor="done">Done?</label> */}
            <Controller
              name="done"
              control={control}
              id="done"
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Done?"
                />
              )}
            />
          </FormControl>
        </div>
        <div>
          <Button type="reset" onClick={reset}>
            Reset
          </Button>
          <Button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
            {todo ? "Update" : "Add"}
          </Button>
        </div>
      </Stack>
    </form>
  );
};

export default TodoForm;

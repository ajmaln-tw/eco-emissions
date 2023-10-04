import { Box, Grid, InputLabel, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import Select from "react-select";
import { FORM_CONTROL_STYLE } from "./style";
import TextErrorType2 from "./TextErrorType2";

function CustomSelect(props) {
  const { name = "", options = [], width = "150px", multiple = false, label = "", errorName = "", statusError = false, onChangeFromController, disabled = false, isMandatory = false, ...rest } = props;
  return (
    <Grid sx={{ ...FORM_CONTROL_STYLE, width: "100%", mx: 1 }}>
      <InputLabel htmlFor={name} sx={{ fontSize: "12px" }}>{label} {isMandatory && <span style={{ color: "red", fontSize: "14px" }}> *</span>}</InputLabel>
      <Field
        as='select'
        name={name}
      >
        {
          ({ field, form }) => {
            return (
              <Box>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: state.isFocused ? "1px solid #a9a9a9" : "1px solid #E4E4E4", // B4B4B4
                      boxShadow: "none",
                      background: "#FBFBFB",
                      color: "#fbfbfb",
                      fontSize: "10px",
                      height: "13px",
                      width: width,
                      fontWeight: 400,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        borderColor: "##c7c7c7"
                      }
                    }),
                    option: (provided) => ({
                      ...provided,
                      maxHeight: "30px", fontSize: "10px"
                    })
                  }}
                  {...field}
                  {...rest}
                  id={name}
                  options={options}
                  onChange={value => {
                    onChangeFromController && onChangeFromController(value);
                    form.setFieldValue(field.name, value);
                  }}
                  isDisabled={disabled}
                  dropdownHeight={600}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  isMulti={multiple}
                  name={name}
                />
                {statusError ? <Typography variant="p" sx={{ color: "red.main", mt: 1.5, fontSize: "9px", lineHeight: 0 }}>{errorName}</Typography> :
                  <ErrorMessage component={TextErrorType2} name={name} />}
              </Box>
            );
          }
        }
      </Field>
    </Grid >
  );
}

export default CustomSelect;

import { Box, Grid, IconButton, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { FORM_CONTROL_STYLE } from "./style";
import TextErrorType2 from "./TextErrorType2";

function Input2(props) {

    const { label, name, icon, onClick, sx = {}, errorName = "", statusError, onChangeText, onChangeFromController, digitsOnly = false, isMandatory = false, upperCase = false, ...rest } = props;
    return (
        <Grid sx={{ ...FORM_CONTROL_STYLE, ...sx }}>
            <InputLabel htmlFor={name} sx={{ fontSize: "12px" }}>{label} {isMandatory && <span style={{ color: "red", fontSize: "14px" }}> *</span>}</InputLabel>
            <Field name={name} sx={{ height: "20px" }}>
                {({ form, field }) => {
                    const { handleChange } = form;
                    const customHandleChange = (e) => {
                        onChangeText && onChangeText(e.target.value);
                        const regex = /^[0-9\b]+$/;
                        if (!digitsOnly) {
                            handleChange(e);
                        }
                        if (digitsOnly && e.target.value === "" || regex.test(e.target.value.toLowerCase())) {
                            handleChange(e);
                        } else if (upperCase) {
                            e.target.value = e.target.value.toUpperCase();
                            handleChange(e);
                        }
                    };
                    onChangeFromController && onChangeFromController(form.values[name]);
                    return (
                        <Box>
                            <TextField
                                id={name}
                                {...field}
                                {...rest}
                                size="small"
                                onChange={customHandleChange}
                                autoComplete="new-password"
                                sx={{
                                    "& .MuiInputBase-input.Mui-disabled": {
                                        WebkitTextFillColor: "#000"
                                    },
                                    maxWidth: "400px"
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {icon && <IconButton onClick={onClick} edge="end"> {icon}</IconButton>}
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Box sx={{ display: "block" }}>
                                {statusError ? <Typography variant="p" sx={{ color: "error.main", fontSize: "9px", mt: 1.5, lineHeight: 0 }}>{errorName}</Typography> :
                                    <ErrorMessage component={TextErrorType2} name={name} />}
                            </Box>
                        </Box>
                    );
                }}
            </Field>
        </Grid >
    );
}

export default Input2;

import { Grid, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Field } from "formik";
import { FORM_CONTROL_STYLE } from "./style";

function Input2(props) {


    const { label, name, icon, onClick, sx = {}, onChangeText, onChangeFromController, digitsOnly = false, isMandatory = false, upperCase = false, ...rest } = props;
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
                        <TextField
                            id={name}
                            {...field}
                            {...rest}
                            size="small"
                            onChange={customHandleChange}
                            autoComplete="new-password"
                            sx={{
                                "& .MuiInputBase-input.Mui-disabled": {
                                    WebkitTextFillColor: "#5A5A5A"
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
                    );
                }}
            </Field>

        </Grid >
    );
}

export default Input2;

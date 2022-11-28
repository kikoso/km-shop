import * as React from "react";
import {Box, Button, CircularProgress, FormGroup, Stack, TextField, useMediaQuery, useTheme} from "@mui/material";
import {DoneOutlined} from "@mui/icons-material";
import {Formik} from "formik";
import * as Yup from "yup";
import {AppHelper} from "../../../base";
import {AlertError, AlertSuccess} from "../../../components";

export function ContactForm() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Formik
            initialValues={{
                fname: '',
                lname: '',
                email: '',
                phone: '',
                message: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                fname: Yup.string().required('First Name is required'),
                lname: Yup.string().required('Last Name is required'),
                email: Yup.string().required('Email is required').email('Email must be a valid email'),
                message: Yup.string().required('Message is required'),
            })}
            onSubmit={async (values, {setErrors, setStatus, setValues}) => {

                setStatus({success: null});
                setErrors({submit: null});

                await new Promise(r => setTimeout(r, 1000));

                try {

                    // const response = await HttpClient.put.category(new Requests.CategoryRequest(
                    //     values.image,
                    //     values.name,
                    //     values.isPublished,
                    //     values.uploads,
                    // ))

                    if (Math.random() < 0.7) {
                        throw new Error('The form is in demo mode.');
                    } else {
                        setValues({
                            fname: '',
                            lname: '',
                            email: '',
                            phone: '',
                            message: '',
                        }, false);

                        setStatus({success: true});
                    }

                } catch (error) {

                    const errors = {
                        fname: AppHelper.findError('fname', error.validate),
                        lname: AppHelper.findError('lname', error.validate),
                        email: AppHelper.findError('email', error.validate),
                        message: AppHelper.findError('message', error.validate),
                    }

                    setErrors(AppHelper.isNotEmpty(errors) ? errors : {
                        submit: error.message
                    });

                    setStatus({success: false});
                }
            }}
        >
            {({
                  status,
                  setStatus,
                  errors,
                  setErrors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
              }) => (
                <form noValidate onSubmit={handleSubmit}>

                    <FormGroup>
                        <Box>
                            <Stack
                                spacing={isMD ? 2 : 3}
                                sx={{
                                    backgroundColor: '#F6F7F9',
                                    borderRadius: 2,
                                    p: isMD ? isSM ? 2 : 3 : 4,
                                    position: 'relative'
                                }}
                            >
                                {errors.submit && (
                                    <AlertError onClose={() => setErrors({submit: null})}>
                                        {errors.submit}
                                    </AlertError>
                                )}
                                {status && status.success && (
                                    <AlertSuccess onClose={() => setStatus({success: false})}>
                                        Success submit form!
                                    </AlertSuccess>
                                )}

                                <Stack spacing={isMD ? 2 : 3} direction={isSM ? 'column' : 'row'}>

                                    <TextField
                                        disabled={isSubmitting}
                                        type={'text'}
                                        name={'fname'}
                                        value={values.fname}
                                        helperText={touched.fname ? errors.fname : ''}
                                        error={Boolean(touched.fname && errors.fname)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        label="First Name"
                                        variant="filled"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            }
                                        }}
                                    />

                                    <TextField
                                        disabled={isSubmitting}
                                        type={'text'}
                                        name={'lname'}
                                        value={values.lname}
                                        helperText={touched.lname ? errors.lname : ''}
                                        error={Boolean(touched.lname && errors.lname)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        label="Last Name"
                                        variant="filled"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            }
                                        }}
                                    />
                                </Stack>

                                <TextField
                                    disabled={isSubmitting}
                                    type={'text'}
                                    name={'email'}
                                    value={values.email}
                                    helperText={touched.email ? errors.email : ''}
                                    error={Boolean(touched.email && errors.email)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    label="Email"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <TextField
                                    disabled={isSubmitting}
                                    type={'phone'}
                                    name={'phone'}
                                    value={values.phone}
                                    helperText={touched.phone ? errors.phone : ''}
                                    error={Boolean(touched.phone && errors.phone)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    label="Phone (optional)"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <TextField
                                    disabled={isSubmitting}
                                    type={'text'}
                                    name={'message'}
                                    value={values.message}
                                    helperText={touched.message ? errors.message : ''}
                                    error={Boolean(touched.message && errors.message)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    minRows={5}
                                    maxRows={10}
                                    label="Message"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <Box>
                                    <Button
                                        type={'submit'}
                                        disableElevation
                                        variant={'contained'}
                                        size={'large'}
                                        color={'secondary'}
                                        disabled={isSubmitting}
                                        startIcon={isSubmitting ? (
                                            <CircularProgress sx={{
                                                mr: 0.5,
                                                height: '18px !important',
                                                width: '18px !important'
                                            }}/>
                                        ) : (
                                            <DoneOutlined sx={{
                                                height: 18
                                            }}/>
                                        )}
                                    >
                                        Send Message
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </FormGroup>
                </form>
            )}
        </Formik>
    )
}

ContactForm.propTypes = {};
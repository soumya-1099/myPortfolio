import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required('Please enter your email') ,
  phone: Yup.number().positive().integer().min(10).max(12),
  message: Yup.string().required('Please enter your message')
});

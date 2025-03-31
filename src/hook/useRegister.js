// import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signUpSchema } from "@validations/signUpSchema";
// import { useForm } from "react-hook-form"
// import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
// import actAuthRegister from "@store/auth/act/actAuthRegister";
// import { useAppDispatch, useAppSelector } from "@store/hooks";
// import { useEffect } from "react";
// import { resetUI } from "@store/auth/authSlice";

// const useRegister = () => {
//     const dispatch = useAppDispatch()
//     const navigate = useNavigate();
//     const { emailAvailabilityStatus, enteredEmail, checkEmailAvailability, resetCheckEmailAvailability } = useCheckEmailAvailability()
//     const { loading, error, token } = useAppSelector((state) => state.auth)

//     const { register, handleSubmit, formState: { errors }, trigger, getFieldState } = useForm({
//         mode: "onBlur",
//         resolver: zodResolver(signUpSchema),
//     });

//     const onSubmit = (data) => {
//         const { firstName, lastName, email, password } = data;
//         dispatch(actAuthRegister({ firstName, lastName, email, password }))
//             .unwrap()
//             .then(() => {
//                 navigate("/login?message=account_created");
//             });
//     }

//     const emailOnBlurHandler = async (e) => {
//         await trigger("email");
//         const value = e.target.value;
//         const { isDirty, invalid } = getFieldState("email");

//         if (isDirty && !invalid && enteredEmail !== value) {
//             checkEmailAvailability(value);
//         }

//         if (isDirty && invalid && enteredEmail) {
//             resetCheckEmailAvailability();
//         }
//     }

//     useEffect(() => {
//         return () => {
//             dispatch(resetUI())
//         }
//     }, [dispatch])


//     return { loading, error, token, errors, emailAvailabilityStatus, onSubmit, register, handleSubmit, emailOnBlurHandler, };
// }

// export default useRegister
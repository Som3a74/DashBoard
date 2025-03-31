// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, SubmitHandler } from "react-hook-form"
// import { signInSchema } from "@validations/signInSchema";
// import actAuthLogin from "@store/auth/act/actAuthLogin";
// import { useAppDispatch, useAppSelector } from "@store/hooks";
// import { useEffect } from "react";
// import { resetUI } from "@store/auth/authSlice";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const useLogin = () => {
//     const dispatch = useAppDispatch()
//     const navigate = useNavigate()
//     const [searchParams, setSearchParams] = useSearchParams()
//     const { loading, error, token } = useAppSelector((state) => state.auth)

//     const { register, handleSubmit, formState: { errors } } = useForm({
//         mode: "all",
//         resolver: zodResolver(signInSchema),
//     });

//     const onSubmit = (data) => {
//         if (searchParams.get("message")) {
//             setSearchParams("")
//         }
//         dispatch(actAuthLogin(data)).unwrap().then(() => navigate("/"))
//     }

//     useEffect(() => {
//         return () => {
//             dispatch(resetUI())
//         }
//     }, [dispatch])

//     return { error, loading, token, errors, searchParams, register, handleSubmit, onSubmit };
// }

// export default useLogin
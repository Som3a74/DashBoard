// import { Navigate, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import InputForm from '../../components/form/InputForm';
// import CreateAccount from '../../components/form/CreateAccount';
// import { signUpSchema } from '../../validations/signUpSchema';
// import actAuthRegister from './../../store/auth/act/actAuthRegister';

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading , error, token } = useSelector((state) => state.auth);

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     mode: "onBlur",
//     resolver: zodResolver(signUpSchema),
//   });

//   if (token) {
//     return <Navigate to="/" replace />;
//   }

//   const onSubmit = async (data) => {
//     try {
//       await dispatch(actAuthRegister(data)).unwrap();
//       navigate("/");
//     } catch (error) {
//       console.log(error)
//       // Error is already handled by Redux
//     }
//   };

//   return (
//     <section className="flex flex-col items-center justify-center w-full min-h-[90vh]">
//       <div className="sm:w-sm">
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
//           <InputForm
//             label="name"
//             name="name"
//             type="text"
//             placeholder="name"
//             id="name"
//             register={register}
//             error={errors.name?.message}
//           />

//           <InputForm
//             label="Email Address"
//             name="email"
//             type="email"
//             id="email"
//             placeholder="Phone number or email"
//             register={register}
//             error={errors.email?.message}
//           />

//           <InputForm
//             label="Password"
//             name="password"
//             type="password"
//             placeholder="Password"
//             id="password"
//             register={register}
//             error={errors.password?.message}
//           />

//           <button
//             type="submit"
//             className="btn btn-primary w-full text-center"
//             disabled={status === 'pending'}
//           >
//             <button type='submit' className="btn btn-primary w-full text-center">
//               {loading === "pending" ? (
//                 <>
//                   <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
//                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
//                   </svg>
//                   Loading...
//                 </>
//               ) : ("Submit")
//               }
//             </button>
//           </button>

//           {error && (
//             <div className="text-center mt-3">
//               <p className="text-red-600">{error}</p>
//             </div>
//           )}
//         </form>

//         <CreateAccount
//           title="Already have an account?"
//           description="Login"
//           link="/login"
//         />
//       </div>
//     </section>
//   );
// };

// export default Register;

import { Link, Navigate, useNavigate } from 'react-router-dom';
import InputForm from './../../components/form/InputForm';
import CreateAccount from '../../components/form/CreateAccount';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import actAuthRegister from '../../store/auth/act/actAuthRegister';
import { signUpSchema } from '../../validations/signUpSchema';

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { error, loading, token, errors, searchParams, register, handleSubmit, onSubmit } = useLogin();

  const { loading, error, token } = useSelector((state) => state.auth)
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
    resolver: zodResolver(signUpSchema),
  });
  
  if (token) { return <Navigate to={"/"} /> }
  const onSubmit = (data) => {
    const { name, email, password } = data;
    try {
      dispatch(actAuthRegister({ name, email, password })).unwrap().then((state) => {
        if (state.success) {navigate("/");}
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[90vh] ">
      <div className="sm:w-sm ">

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          <InputForm
            label="name"
            type="text"
            id="name"
            placeholder="name"
            register={register}
            error={errors.name?.message}
          />

          <InputForm
            label="Email Address"
            type="email"
            id="email"
            placeholder="Phone number or email"
            register={register}
            error={errors.email?.message}
          />

          <div className="relative">
            <InputForm
              label="Password"
              type={'password'}
              id="password"
              placeholder="Password"
              register={register}
              error={errors.password?.message}
            />
          </div>

          <button type='submit' className="btn btn-primary w-full text-center" disabled={loading === 'pending'}>
            {loading === "pending" ? (
              <>
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                Loading...
              </>
            ) : ("Submit")
            }
          </button>
        </form>
        <div className="w-full text-center">
          {error && (<p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>)}
        </div>
        <CreateAccount title="Already have an account?" description="Login" link="/login" />
      </div>
    </section>
  )
}

export default Register
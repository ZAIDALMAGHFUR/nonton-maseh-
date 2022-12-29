import React, { useEffect } from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="py-24 flex justify-center">
                    <div>
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3 flex justify-center ">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7 flex justify-center">
                                Welcome to Copy and Paste your working
                            </p>
                            <ValidationErrors errors={errors} />
                        </div>
                        <div className="flex justify-center bg-slate-800 w-[30rem] h-[25rem] rounded-lg">
                            <div className="flex justify-center items-center">
                                <form className="w-[370px]" onSubmit={submit}>
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <Label
                                                forInput="email"
                                                value="Email Address"
                                            />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={data.email}
                                                isFocused={true}
                                                handleChange={onHandleChange}
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                forInput="password"
                                                value="Password"
                                            />
                                            <Input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={data.password}
                                                handleChange={onHandleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid space-y-[14px] mt-[30px]">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            processing={processing}
                                        >
                                            <span className="text-base font-semibold">
                                                Login Hire
                                            </span>
                                        </Button>
                                        <Link href={route("register")}>
                                            <Button
                                                type="button"
                                                variant="light-outline"
                                            >
                                                <span className="text-base text-white">
                                                    Create New Account
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



// import React, { useEffect } from "react";
// import  "../../../css/login.css"; 
// import Input from "@/Components/Input";
// import Label from "@/Components/Label";
// import Button from "@/Components/Button";
// import ValidationErrors from "@/Components/ValidationErrors";
// import { Head, Link, useForm } from "@inertiajs/inertia-react";

// export default function Login() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: "",
//         password: "",
//         remember: "",
//     });

//     useEffect(() => {
//         return () => {
//             reset("password");
//         };
//     }, []);

//     const onHandleChange = (event) => {
//         setData(event.target.name, event.target.value);
//     };

//     const submit = (e) => {
//         e.preventDefault();

//         post(route("login"));
//     };
//     return (
//         <>
//             <Head title="Sign Up" />
//             <form action="" class="form" onSubmit={submit}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <div class="form-inner">
//                 <h2>LOGIN</h2>
//                 <div class="content">
//                                 <div>
//                                     <Label
//                                         forInput="email"
//                                         value="Email Address"
//                                     />
//                                     <Input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Email Address"
//                                         value={data.email}
//                                         isFocused={true}
//                                         handleChange={onHandleChange}
//                                     />
//                                 </div>
//                                 <div>
//                                     <Label
//                                         forInput="password"
//                                         value="Password"
//                                     />
//                                     <Input
//                                         type="password"
//                                         name="password"
//                                         placeholder="Password"
//                                         value={data.password}
//                                         handleChange={onHandleChange}
//                                     />
//                                 </div>

//                                 <div className="grid space-y-[14px] mt-[30px]">
//                                 <Button
//                                     type="submit"
//                                     variant="primary"
//                                     processing={processing}
//                                 >
//                                     <span className="text-base font-semibold">
//                                         Start Watching
//                                     </span>
//                                 </Button>
//                                 <Link href={route("register")}>
//                                     <Button
//                                         type="button"
//                                         variant="light-outline"
//                                     >
//                                         <span className="text-base text-white">
//                                             Create New Account
//                                         </span>
//                                     </Button>
//                                 </Link>
//                             </div>
//                 </div>
//                 </div>


//             </form>
//         </>
//     );
// }


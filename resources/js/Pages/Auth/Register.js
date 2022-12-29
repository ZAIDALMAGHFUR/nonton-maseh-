import React, { useEffect } from "react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">

                <div className="py-24 flex justify-center ">
                    <div>
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3 flex justify-center ">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7 flex justify-center">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                            <ValidationErrors errors={errors} />
                        </div>
                        <div className="flex justify-center bg-slate-800 w-[30rem] h-[40rem] rounded-lg">
                            <div className="flex justify-center items-center">
                                    <form className="w-[370px]" onSubmit={submit}>
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <Label forInput="name" value="Full Name" />
                                            <Input
                                                type="text"
                                                name="name"
                                                value={data.name}
                                                placeholder="Your fullname..."
                                                isFocused={true}
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                forInput="email"
                                                value="Email Address"
                                            />
                                            <Input
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                placeholder="Your Email Address"
                                                handleChange={onHandleChange}
                                                required
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
                                                value={data.password}
                                                placeholder="Your Password"
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                forInput="password"
                                                value="Confirm Password"
                                            />
                                            <Input
                                                type="password"
                                                name="password_confirmation"
                                                value={data.password_confirmation}
                                                placeholder="Your Password"
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="grid space-y-[14px] mt-[30px]">
                                        <Button type="submit" processing={processing}>
                                            <span className="text-base font-semibold">
                                                Sign Up
                                            </span>
                                        </Button>
                                        <Link href={route("login")}>
                                            <Button variant="light-outline">
                                                <span className="text-base text-white">
                                                    Sign In to My Account
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

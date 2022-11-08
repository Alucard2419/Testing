import React from 'react';
import { ReduxState, useTranslation } from 'adminjs';
import * as Yup from 'yup';
import {useSelector} from "react-redux";

const validation_schema = Yup.object().shape({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
    rememberMe: Yup.bool()
});



export type LoginProps = {
    credentials: Credentials;
    action: string;
    errorMessage?: string;
    children?: any;
};

export type Credentials = {
    email: string;
    password: string;
};

export const SingIn: React.FC<LoginProps> = (props) => {
    const { action, credentials, errorMessage } = props;
    const { translateLabel, translateButton, translateProperty, translateMessage } = useTranslation();
    const branding = useSelector((state: ReduxState) => state.branding);
    const message = `Email: ${credentials.email} | Password: ${credentials.password}`;

    return (
        <React.Fragment>
            <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
                <div className="h-full flex flex-auto flex-col justify-between">
                    <main className="h-full">
                        <div className="page-container relative h-full flex flex-auto flex-col">
                            <div className="h-full">
                                <div className="container mx-auto flex flex-col flex-auto items-center justify-center min-w-0 h-full">
                                    <div className="card min-w-[320px] md:min-w-[450px] card-shadow">
                                        <div className="card-body md:p-10">
                                            <div className="text-center">
                                                <div className="logo pb-4" style={{width: "auto"}}>
                                                    {branding.logo ? <img className="mx-auto"  src={branding.logo} alt={branding.companyName} /> : branding.companyName}
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="mb-4">
                                                    <h3 className="mb-1">Welcome back!</h3>
                                                    <p>Please enter your credentials to sing in!</p>
                                                </div>
                                                <form className="mt-8 space-y-6" action="/admin/login" method="POST">
                                                    <div className="form-container vertical">
                                                        <div className="">
                                                            <label htmlFor="email-address" className="form-label mb-2">
                                                                {translateProperty('email')}
                                                            </label>
                                                             <div>
                                                                 <input
                                                                    defaultValue={credentials.email}
                                                                    id="email-address"
                                                                    name="email"
                                                                    type="email"
                                                                    autoComplete="email"
                                                                    required
                                                                    className="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                                                                    placeholder={translateProperty('email')}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-item vertical">
                                                        <label htmlFor="password" className="form-label mb-2">
                                                            {translateProperty('password')}
                                                        </label>
                                                    <div className="">
                                                        <span className="input-wrapper">
                                                            <input style={{paddingRight: "2.25rem"}}
                                                                id="password"
                                                                defaultValue={credentials.password}
                                                                className="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                                                                type="password" name="password" autoComplete="off"
                                                                placeholder={translateProperty('password')}/>
                                                                {/*<div className="input-suffix-end">*/}
                                                                {/*    <span className="cursor-pointer text-xl">*/}
                                                                {/*        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>*/}
                                                                {/*    </span>*/}
                                                                {/*</div>*/}
                                                        </span>
                                                    </div>
                                                 </div>
                                                    <div className="flex justify-between mb-6">
                                                        <label className="checkbox-label mb-0" htmlFor="">
                                                            <input className="checkbox text-indigo-600 mr-2" type="checkbox" name="rememberMe" />
                                                            <span className="ltr:ml-2 rtl:mr-2">Remember Me</span>
                                                        </label>
                                                        <a className="text-indigo-600 hover:underline"
                                                            href="#">Forgot Password?</a>
                                                     </div>
                                                     <button
                                                        className="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-11 px-8 py-2 w-full"
                                                        type="submit">Sign In
                                                     </button>
                                                     <div className="mt-4 text-center"><span>Don't have an account yet? </span><a
                                                        className="text-indigo-600 hover:underline" href="#">Sign
                                                     up</a></div>
                                                </form>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SingIn;

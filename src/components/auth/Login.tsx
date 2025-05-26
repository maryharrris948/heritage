'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import { RiArrowRightLine } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-[#F3F3F3]">
        <div className="p-[8px_13px] bg-[#0f2652] text-[1.125em] text-[#ffffff66]">Sign In</div>
        <div className="bg-white mx-auto border p-5 pb-7">
          <div className="relative border border-[#63666b] flex items-center justify-between h-[46px] p-2">
            <span className="text-[1em]">Personal Account</span>
            <button disabled className="border-l border-[#63666b] flex items-center justify-center w-[44px] h-[46px] absolute right-0">
              <IoMdArrowDropdown className="!text-[30px]" />
            </button>
          </div>
          <div className="mt-3">{error && <p className="text-base text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
          <form onSubmit={handleLogin} className="mt-7">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <input type="text" value={username} placeholder="Username" className="p-5 py-[18px] bg-[#efeff0] text-[#646569] outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <input type="password" value={password} placeholder="Password" className="p-5 py-[18px] bg-[#efeff0] text-[#646569] outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-left justify-between gap-2">
                <button type="submit" className="p-4 px-8 bg-[#0f2652] flex items-center gap-2 max-w-max text-[1.125em] text-[#ffffff] font-semibold">
                  <span>Sign In</span>
                  <RiArrowRightLine />
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="p-5 text-center">
          <h3 className="text-[25px] m-[0px_auto_12px]">A community of banks working together to serve our customers.</h3>
          <h5 className="text-base text-[#646569] m-[12px_auto_12px]">Find out how our differences make us stronger.</h5>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { SignupEmailandPassword } from "./SignupEmailandPassword";
import { SignupSection } from "./SignupSection";

export const SignupPage = () => {
  const [pagecount, setPageCount] = useState(0);

  const comp = [<SignupSection />, <SignupEmailandPassword />][pagecount];

  return <div>{comp}</div>;
};

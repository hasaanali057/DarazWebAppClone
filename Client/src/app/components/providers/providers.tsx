import { ReactNode } from "react";
import { SessionProvider } from 'next-auth/react';

interface Props{
  childern: ReactNode;
}

const Providers = ({ childern }: Props) =>  {
  return <SessionProvider>{ childern }</SessionProvider>
}

export default Providers;
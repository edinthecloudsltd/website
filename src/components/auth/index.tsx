import { useEffect } from 'react';

import { useSession, signIn } from 'next-auth/react';

const Auth: React.FC = ({ children }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) signIn(); // If not authenticated, force log in
    console.log(session);
  }, [session, status]);

  if (session) {
    return <>{children}</>;
  }

  return <div>Loading...</div>;
};

export default Auth;

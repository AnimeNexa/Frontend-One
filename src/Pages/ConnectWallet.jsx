
import { createThirdwebClient } from "thirdweb";

import { ConnectButton } from "thirdweb/react";

const client = createThirdwebClient({ clientId: import.meta.env.VITE_CLIENT_ID });

export default function ConnectWallet() {
 
   
  return (
    <>
    <div className="flex justify-center items-center mt-40 ">
      <ConnectButton client={client} />
    </div>
    </>
  );
}



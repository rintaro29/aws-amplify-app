import Image from "next/image";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../src/amplifyconfiguration.json";
Amplify.configure(config);
const inter = Inter({ subsets: ["latin"] });

interface AuthProps {
  signOut: () => void;
  user: { username: string };
}

const Home = ({ signOut, user }: AuthProps) => {
  return (
    <div>
      {user ? (
        <>
          <h3>私は権限を持っています:{user.username}</h3>
          <button className="bg-cyan-200 rounded-lg text-blue-600 hover:text-red-400" onClick={signOut}>
            サインアウト
          </button>
        </>
      ) : (
        <>
          <h3>私は権限を持っていません</h3>
        </>
      )}
    </div>
  );
};

export default withAuthenticator(Home);

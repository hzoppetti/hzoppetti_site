import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Index() {
  const [text, helper] = useTypewriter({
    /* Config */
    words: ["Software engineer", "Technical writer", "Writer", "Human"],
    loop: 1,
  });

  const { isType, isDelete, isDelay, isDone } = helper;

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h2>Hello,</h2>
          <h1>
            I'm Heather Zoppetti<span className="fancy">.</span>
          </h1>
          <span className="handle">
            {text}
            <Cursor
              cursorStyle={"."}
              cursorColor="green"
              cursorBlinking={false}
            />
          </span>
          <h2>Welcome to my website.</h2>
          <span className="handle">(I'm looking for work.)</span>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
          margin-top: 2rem;
          margin-bottom: 0;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.5em;
          margin-bottom: 1em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
          font-size: 1.25rem;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

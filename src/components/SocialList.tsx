import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Substack from "../assets/substack-alt.svg";
import config from "../lib/config";
import { FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BsSubstack } from "react-icons/bs";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <FaTwitter />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <SiGithub />
      </a>
      <a
        title="Substack"
        href={`https://heatherzoppetti.substack.com/`}
        target="_blank"
        rel="noopener"
      >
        <BsSubstack />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}

import React from "react";
import config from "../lib/config";
import { FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BsSubstack } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export function SocialList({}) {
  return (
    <div>
      <a
        title="LinkedIn"
        href={`https://www.linkedin.com/in/heather-zoppetti/`}
        target="_blank"
        rel="noopener"
      >
        <FaLinkedin />
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
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <FaTwitter />
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

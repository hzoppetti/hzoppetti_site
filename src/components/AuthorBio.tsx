import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
};
export default function AuthorBio({ author }: Props) {
  return (
    <>
      <span>{author.introduction}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
            line-height: 1.5em;
          }
        `}
      </style>
    </>
  );
}

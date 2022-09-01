import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import PostNotFound from "../errors/postNotFound.md";

export const Post = ({ postUrl }) => {
  const url = `${process.env.PUBLIC_URL}${postUrl}`;
  const [content, setContent] = useState("");

  //console.log(postUrl);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("text/markdown") !== -1)
          return res.text();

        return notFoundHandler();
      })
      .then((text) => setContent(text));
  }, [url]);

  return <Markdown>{content}</Markdown>;
};

async function notFoundHandler() {
  let result = fetch(PostNotFound);
  let text = await (await result).text();
  return text;
}

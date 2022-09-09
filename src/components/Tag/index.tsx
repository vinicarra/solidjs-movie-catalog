import { Component, ParentComponent, children } from "solid-js";

interface ITagProps {}

export const Tag: ParentComponent<ITagProps> = (props) => {
  const c = children(() => props.children);

  return <div class="px-2 py-1 bg-button rounded">{c()}</div>;
};

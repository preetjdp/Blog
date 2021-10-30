import Image from "next/image";
import Figure, { Figcaption } from "./Figure";
import CustomLink from "./CustomLink";

const MDXComponents = {
  Figure,
  Figcaption,
  Image,
  a: CustomLink,
};

export default MDXComponents;

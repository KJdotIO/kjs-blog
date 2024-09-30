import React from "react";

type TextData = {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  url?: string;
  children?: TextData[];
  level?: number;
  format?: string;
  image?: {
    name: string;
    alternativeText?: string;
    caption?: string;
    url: string;
  };
};

export function renderContent(content: TextData[]): React.ReactNode[] {
  return content.map((item, index) => {
    switch (item.type) {
      case "paragraph":
        return <p key={index}>{item.children && renderText(item.children)}</p>;
      case "heading":
        const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            className={`font-serif mt-10 ${getHeadingClass(item.level)}`}
          >
            {item.children && renderText(item.children)}
          </HeadingTag>
        );
      case "list":
        const ListTag = item.format === "ordered" ? "ol" : "ul";
        const listClass =
          item.format === "ordered" ? "list-decimal" : "list-disc";
        return (
          <ListTag key={index} className={`pl-8 ${listClass}`}>
            {item.children &&
              item.children.map((child, childIndex) => (
                <li key={childIndex}>{renderText(child.children || [])}</li>
              ))}
          </ListTag>
        );
      case "quote":
        return (
          <blockquote className="border-l-[4px] border-l-gray-500 dark:border-white pl-4 italic text-gray-500 dark:text-gray-300" key={index}>
            <p>{item.children && renderText(item.children)}</p>
          </blockquote>
        );
      case "code":
        return <pre key={index} className="overflow-x-auto whitespace-pre bg-gray-200 dark:bg-[#232323] p-4 rounded text-sm ">{item.children && item.children[0].text}</pre>;
      case "image":
        return (
          <figure key={index} className="flex flex-col items-center">
            <img
              src={item.image?.url || ""}
              alt={item.image?.alternativeText || ""}
              className="w-[90%] sm:w-[80%]"
            />
            {item.image?.caption && (
              <figcaption className="text-center text-xs sm:text-sm mt-2 dark:text-gray-500 text-gray-500">
                {item.image.caption}
              </figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
  });
}

function renderText(children: TextData[]): React.ReactNode[] {
  return children.map((item, index) => {
    switch (item.type) {
      case "text":
        if (item.text === "") {
          return (
            <React.Fragment key={index}>
              <br />
            </React.Fragment>
          );
        }

        let className = "";
        if (item.bold) className += "font-bold ";
        if (item.italic) className += "italic ";
        if (item.code) {
          return <code key={index}>{item.text}</code>;
        }
        return item.text ? (
          <span key={index} className={`${className.trim()}`}>
            {item.text}
          </span>
        ) : null;
      case "link":
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            {item.children && renderText(item.children)}
          </a>
        );
      default:
        return null;
    }
  });
}

function getHeadingClass(level?: number) {
  switch (level) {
    case 1:
      return "text-4xl font-bold";
    case 2:
      return "text-3xl";
    case 3:
      return "text-2xl";
    case 4:
      return "text-xl";
    case 5:
      return "text-lg";
    case 6:
      return "text-base";
    default:
      return "text-xl";
  }
}

type IntroData = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

export function introText(children: IntroData[]) {
  return children.map((items, index) => {
    if (items.bold && items.italic) {
      return (
        <span key={index} className="font-bold italic">
          {items.text}
        </span>
      );
    } else if (items.bold) {
      return (
        <span key={index} className="font-bold">
          {items.text}
        </span>
      );
    } else if (items.italic) {
      return (
        <span key={index} className="italic">
          {items.text}
        </span>
      );
    } else {
      return <span key={index}>{items.text}</span>;
    }
  });
}

import { useState, ReactNode } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

export default function Link({
  page,
  children,
}: {
  page: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

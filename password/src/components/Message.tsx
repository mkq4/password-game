import { useState } from "react";

interface Props {
  className?: string;
  text: string;
  step: number;
}

export const Message = ({ text, step, className }: Props) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
    // setIsCompleted(false)
  return (
    <div
      className={`w-[350px] flex items-start flex-col ${
        isCompleted ? "bg-emerald-400" : "bg-red-400"
      } ${className}`}
    >
      <span className="ml-3 py-2">step: {step}</span>
      <p className="text-center py-10 w-[100%]">{text}</p>
    </div>
  );
};

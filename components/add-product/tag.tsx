"use client";
export const Tag = ({
  tag,
  addTagOnClick,
}: {
  tag: string;
  addTagOnClick: (tag: string) => void;
}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    addTagOnClick(tag);
  };
  return (
    <div
      className="bg-secondary p-1 mr-2 rounded-lg text-sm hover:bg-secondary/50"
      onClick={handleClick}
    >
      <span className="cursor-pointer">{tag}</span>
    </div>
  );
};

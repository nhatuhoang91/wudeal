"use client";
import { ReactNode, useContext, useRef, useEffect, forwardRef } from "react";
import { Tag } from "./tag";

import {
  autoTags,
  babiesKidsTags,
  bagsLuggageTags,
  beautyTags,
  homeImprovementTags,
  healthTags,
  groceryTags,
  computerTags,
  techElectronicTags,
  officeTags,
  petTags,
  shoeTags,
  sportingGoodsTags,
  clothingAccessoriesTags,
} from "../../config/tags";
import { TagContext } from "./add-product";
import { CategoryGroup } from "@/config/categories";

export const TagInput = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  const category = useContext(TagContext);
  const tagsRef = useRef(null);
  if (tagsRef.current) {
    (tagsRef.current as HTMLSpanElement).innerText = "";
  }

  let tags: string[] = [];
  switch (category) {
    case CategoryGroup.AUTO:
      tags = autoTags;
      break;
    case CategoryGroup.BABIES_AND_KIDS:
      tags = babiesKidsTags;
      break;
    case CategoryGroup.BAGS_AND_LUGGAGE:
      tags = bagsLuggageTags;
      break;
    case CategoryGroup.CLOTHING_AND_ACCESSORIES:
      tags = clothingAccessoriesTags;
      break;
    case CategoryGroup.COMPUTERS:
      tags = computerTags;
      break;
    case CategoryGroup.GROCERY:
      tags = groceryTags;
      break;
    case CategoryGroup.HEALTH:
      tags = healthTags;
      break;
    case CategoryGroup.BEAUTY:
      tags = beautyTags;
      break;
    case CategoryGroup.HOME_IMPROVEMENT:
      tags = homeImprovementTags;
      break;
    case CategoryGroup.OFFICE:
      tags = officeTags;
      break;
    case CategoryGroup.PETS:
      tags = petTags;
      break;
    case CategoryGroup.SHOES:
      tags = shoeTags;
      break;
    case CategoryGroup.SPORTING_GOODS:
      tags = sportingGoodsTags;
      break;
    case CategoryGroup.TECH_AND_ELECTRONICS:
      tags = techElectronicTags;
      break;
    default:
      break;
  }
  const addTagOnClick = (tag: string) => {
    if (tagsRef.current) {
      const tags = (tagsRef.current as HTMLSpanElement).innerText;
      const tagWithDelimiter = tag.concat(";");
      if (tags.includes(tagWithDelimiter)) {
        const newTags = tags.replace(tagWithDelimiter, "");
        (tagsRef.current as HTMLSpanElement).innerText = newTags;
      } else {
        const newTags = tags.concat(tagWithDelimiter);
        (tagsRef.current as HTMLSpanElement).innerText = newTags;
      }
    }
  };
  return (
    <div className={className}>
      {children}
      <div className="flex mt-2">
        {tags.map((tag) => (
          <Tag tag={tag} key={tag} addTagOnClick={addTagOnClick} />
        ))}
      </div>
      <div className="flex min-h-[100px] border-2 rounded-lg mt-2 p-2">
        <span ref={tagsRef}></span>
      </div>
    </div>
  );
};

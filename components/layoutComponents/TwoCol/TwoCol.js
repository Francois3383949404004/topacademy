import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import css from "./TwoCol.module.scss";

const TwoCol = ({ blok }) => {
  return (
    <section className={css.wrapper} {...storyblokEditable(blok)}>
      <div className={css.container}>
        
        {/* Column One */}
        <div className={css.col}>
          {blok.colone.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        {/* Column Two */}
        <div className={css.col}>
          {blok.coltwo.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TwoCol;
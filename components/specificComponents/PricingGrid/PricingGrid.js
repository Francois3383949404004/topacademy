import { storyblokEditable } from "@storyblok/react";
import css from "./PricingGrid.module.scss"; // Import the style file

const PricingGrid = ({ blok }) => {
  // Safety check for data
  const cards = blok.cards || blok.body || blok.columns || [];

  return (
    <div className={css.wrapper} {...storyblokEditable(blok)}>
      <div className={css.container}>
        
        {/* Header Section */}
        <div className={css.header}>
          <h2>Membership Plans</h2>
          <p>Choose the path that fits your goals.</p>
        </div>

        {/* The Grid */}
        <div className={css.grid}>
          {cards.map((card) => (
            <div
              key={card._uid}
              className={`${css.card} ${card.highlight ? css.highlight : ""}`}
            >
              {/* "Popular" Badge */}
              {card.highlight && <div className={css.badge}>Most Popular</div>}

              <div className={css.content}>
                <h3>{card.title}</h3>
                
                <div className={css.price}>
                  {card.price}
                  <span>/mo</span>
                </div>
                
                <p className={css.description}>{card.description}</p>
                
                {/* Features List */}
                <div className={css.features}>
                   {/* We render simple text here. If you use rich text later, you need a renderer */}
                   {typeof card.features === 'string' ? card.features : "Includes all basic features"}
                </div>
              </div>

              {/* Call to Action Button */}
              <div className={css.buttonWrapper}>
                <a href="/join" className={css.button}>
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrid;
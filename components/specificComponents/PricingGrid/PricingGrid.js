import { storyblokEditable } from "@storyblok/react";
import css from "./PricingGrid.module.scss";

const PricingGrid = ({ blok }) => {
  // Safety check: Does 'cards' exist? If not, check other names, or use empty list.
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
              {/* "Popular" Badge - Only shows if highlight is checked */}
              {card.highlight && <div className={css.badge}>Most Popular</div>}

              <div className={css.content}>
                <h3>{card.title}</h3>
                
                <div className={css.price}>
                  {card.price}
                  
                </div>
                
                <p className={css.description}>{card.description}</p>
                
                {/* Features List with Checkmarks */}
                <ul className={css.featureList}>
                  {/* We split the text by "Enter" (New Line) to make list items */}
                  {typeof card.features === 'string' 
                    ? card.features.split('\n').map((feature, index) => (
                        feature.trim() && (
                          <li key={index}>
                            <span className={css.check}>✓</span> {feature}
                          </li>
                        )
                      ))
                    : <li className="text-sm text-red-500">Please switch 'features' to Textarea in Storyblok</li>
                  }
                </ul>
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
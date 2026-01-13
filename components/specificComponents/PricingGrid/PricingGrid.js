import { storyblokEditable } from "@storyblok/react";
import css from "./PricingGrid.module.scss";

const PricingGrid = ({ blok }) => {
  // Ensure we are pulling from the correct field name 'cards' defined in Storyblok
  const cards = blok.cards || [];

  return (
    <div className={css.wrapper} {...storyblokEditable(blok)}>
      <div className={css.container}>
        
        <div className={css.header}>
          <h2>Membership Plans</h2>
          <p>Choose the path that fits your goals.</p>
        </div>

        <div className={css.grid}>
          {cards.map((card) => (
            <div
              key={card._uid}
              className={`${css.card} ${card.highlight ? css.highlight : ""}`}
            >
              {/* Renders 'Most Popular' badge if 'highlight' boolean is true */}
              {card.highlight && <div className={css.badge}>Most Popular</div>}

              <div className={css.content}>
                <h3>{card.title}</h3>
                
                <div className={css.price}>
                  {card.price}
                  {/* We omit '/mo' here if you already included it in the Storyblok Price field */}
                </div>
                
                <p className={css.description}>{card.description}</p>
                
                {/* Feature List Logic: Splits text by new lines into bullet points */}
                <ul className={css.featureList}>
                  {typeof card.features === 'string' && 
                    card.features.split('\n').map((feature, index) => (
                      feature.trim() && (
                        <li key={index}>
                          <span className={css.check}>✓</span> {feature}
                        </li>
                      )
                    ))
                  }
                </ul>
              </div>

              {/* Dynamic Link Logic: Uses the 'link' Multilink field from Storyblok */}
              <div className={css.buttonWrapper}>
                {card.link && (card.link.cached_url || card.link.url) ? (
                  <a 
                    href={card.link.cached_url ? `/${card.link.cached_url}` : card.link.url}
                    className={css.button}
                    target={card.link.target || "_self"}
                  >
                    Join Now
                  </a>
                ) : (
                  /* Fallback link if no link is set in Storyblok */
                  <a href="/join" className={css.button}>
                    Join Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrid;
import React from "react";
import { useIntl } from 'gatsby-plugin-intl';

const HomeAbout = props => {
  const intl = useIntl();  // Initialize the internationalization hook

  return (
    <div className="home-about py-20 mx-d flex justify-end">
      <div className="content">
        <h2 className="text-indent">
          {intl.formatMessage({ id: 'homeAboutDescription' })}
        </h2>
        <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" role="presentation" class="blurb__svg"><path d="M0 0h33v33H0V0Z"></path></svg>
      </div>
    </div>
  );
};

export default HomeAbout;

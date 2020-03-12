/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} CC-BY-SA by {siteTitle}.
      </div>
      <div>
        <Styled.a
          aria-label="Link to the theme author's website"
          href="https://www.generouslabs.org/"
        >
          GeneroUS Labs
        </Styled.a>
      </div>
    </footer>
  );
};

export default Footer;

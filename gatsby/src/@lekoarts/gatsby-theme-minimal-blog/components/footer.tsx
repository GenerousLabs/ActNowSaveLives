/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

const Footer = () => {
  const { author } = useSiteMetadata();

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
        &copy; {new Date().getFullYear()} CC-BY-SA by {author}.
      </div>
      <div>
        <Styled.a
          aria-label="Link to GeneroUS Labs website"
          href="https://www.generouslabs.org/"
        >
          {author}
        </Styled.a>
      </div>
    </footer>
  );
};

export default Footer;

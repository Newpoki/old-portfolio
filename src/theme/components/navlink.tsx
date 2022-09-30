import { forwardRef, useCallback } from "react";
import { NavLink as RRDNavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps;

export const NavLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  /**
   * Scroll to the top of the page when clicking on a link
   */
  const handleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RRDNavLink {...props} onClick={handleClick} ref={ref} />;
});

import { forwardRef, MouseEvent, useCallback } from "react";
import { NavLink as RRDNavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps;

export const NavLink = forwardRef<HTMLAnchorElement, Props>(({ onClick, ...others }, ref) => {
  /**
   * Scroll to the top of the page when clicking on a link
   */
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      window.scrollTo(0, 0);

      onClick?.(event);
    },
    [onClick]
  );

  return <RRDNavLink {...others} onClick={handleClick} ref={ref} />;
});

/** @jsxImportSource theme-ui */

export const Stack = ({ gap = 4, ...props }) => (
  <div
    {...props}
    sx={{
      display: "grid",
      gridGap: gap,
    }}
  />
);

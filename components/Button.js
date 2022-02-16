/** @jsxImportSource theme-ui */

const Button = ({ variant = "primary", ...props }) => (
  <a
    {...props}
    sx={{
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      fontWeight: "bold",
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 4,
      // pass variant prop to sx
      variant: `buttons.${variant}`,
    }}
  />
);

export default Button;

// To do: make as a link

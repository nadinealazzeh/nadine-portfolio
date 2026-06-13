const Button = ({ children, href, variant = 'primary', size = 'md', icon, onClick, type = 'button' }) => {
  const className = `btn btn--${variant} btn--${size}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

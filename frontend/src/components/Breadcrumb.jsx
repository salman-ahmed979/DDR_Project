const Breadcrumb = ({ crumbs }) => {
  return (
    <nav className="row justify-content-start">
      <ol className="breadcrumb">
        {crumbs.map((crumb, ci) => (
          <li key={ci} className="breadcrumb-item align-items-center">
            <a href="#">
              <p>{crumb}</p>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

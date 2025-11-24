import { Link, useLocation } from "react-router-dom";

function formatLabel(text) {
  return text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  //   console.log(pathnames);

  return (
    <div className="flex items-center gap-2 text-sm text-woodsmoke-950 dark:text-white">
      {pathnames.map((value, index) => {
        const path = `${pathnames.slice(0, index + 1).join("/")}`;
        // console.log(path);
        const isLast = index === pathnames.length - 1;

        return (
          <div key={path} className="flex items-center gap-2">
            {index !== 0 && (
              <span className="text-woodsmoke-950/20 dark:text-white/20">
                /
              </span>
            )}

            {isLast ? (
              <span className="text-woodsmoke-950 py-1 px-2 dark:text-white">
                {formatLabel(value)}
              </span>
            ) : (
              <Link
                to={path}
                className="text-woodsmoke-950/40 py-1 px-2 text-sm hover:bg-woodsmoke-950/5 rounded-lg dark:hover:bg-woodsmoke-900 dark:text-white/40"
              >
                {formatLabel(value)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;

import { useRouteError, useNavigate } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 grow flex-col items-center justify-center h-full p-4 text-center dark:bg-woodsmoke-950">
      <h1 className="text-lg font-semibold text-woodsmoke-950 dark:text-white dark:bg-woodsmoke-950">
        Oops! Something went wrong
      </h1>

      <p className="mt-2 text-sm text-woodsmoke-600 dark:text-white/60 max-w-xs">
        {error?.statusText || error?.message || "Page not found"}
      </p>

      <button
        onClick={() => navigate("/dashboards/default")}
        className="
          mt-4 px-4 py-1.5 text-sm rounded-md
          bg-woodsmoke-950 text-white
          hover:bg-woodsmoke-900
          dark:bg-white dark:text-woodsmoke-950
          dark:hover:bg-white/90
          transition-colors
        "
      >
        Go back to Dashboard
      </button>
    </div>
  );
}

export default ErrorPage;

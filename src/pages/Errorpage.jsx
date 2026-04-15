import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-black text-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-success-content">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold">Oops! Page not found</h2>

        <p className="mt-3 text-gray-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 rounded-xl bg-success-content hover:opacity-90 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

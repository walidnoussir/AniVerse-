import { Link } from "react-router-dom";
import { House, TriangleAlert } from "lucide-react";

function PageNotFound() {
  return (
    <main className="">
      <section className="">
        <div className="mx-auto p-10 text-center">
          <div className="flex-center mx-auto mb-6  rounded-full bg-error/10">
            <TriangleAlert className="text-error" size={42} />
          </div>

          <span className="badge mb-4">404 Error</span>

          <h1 className="mb-4 text-6xl">Oops!</h1>

          <h2 className="mb-4">Page Not Found</h2>

          <p className="mx-auto mb-8">
            The page you're looking for doesn't exist, may have been moved, or
            the URL might be incorrect.
          </p>

          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 hover:btn-primary-hover"
          >
            <House size={20} />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;

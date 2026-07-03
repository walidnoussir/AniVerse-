function Error({ error }) {
  return (
    <div className="page flex-center min-h-screen">
      <h2 className="text-error">{error}</h2>
    </div>
  );
}

export default Error;

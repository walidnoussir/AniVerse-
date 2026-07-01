function Spinner() {
  return (
    <div className="flex w-screen h-screen items-center justify-center py-10">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary"></div>
    </div>
  );
}

export default Spinner;

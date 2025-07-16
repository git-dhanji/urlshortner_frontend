export default function Form({ children,onSubmit ,headerText}) {
  return (
    <form
      className="w-full  max-w-md mx-auto flex flex-col gap-6 rounded-2xl"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <h2 className="text-2xl font-space-gro font-bold text-center dark:text-amber-50 mb-2 text-black">
        {headerText}
      </h2>
      {children}
    </form>
  );
}

import { Badge } from "./Index";

export default function LivePreview({child}) {
  return (
    <div className="min-h-dvh min-w-dvw bg-slate-900 flex justify-center items-center">
      {child}
    </div>
  );
}

import { Bookmark, Music2, Trash2 } from "lucide-react";
import { useStudio } from "@/lib/chords/store";

export function Library() {
  const library = useStudio((s) => s.library);
  const loadSaved = useStudio((s) => s.loadSaved);
  const deleteSaved = useStudio((s) => s.deleteSaved);

  return (
    <div className="rounded-xl bg-bg-elevated p-4 shadow-soft sm:p-5">
      <p className="text-xs font-medium tracking-wide text-fg-muted uppercase">
        Library
      </p>
      {library.length === 0 ? (
        <p className="mt-3 text-sm text-fg-muted">
          Saved chords and sequences live here. They stay on this device.
        </p>
      ) : (
        <ul className="mt-3 flex flex-col gap-1.5">
          {library.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 rounded-md border border-transparent px-2 py-1.5 hover:border-border hover:bg-bg-subtle"
            >
              <button
                type="button"
                onClick={() => loadSaved(item)}
                className="flex min-w-0 flex-1 items-center gap-2 text-left"
              >
                {item.kind === "chord" ? (
                  <Bookmark className="size-3.5 shrink-0 text-fg-subtle" />
                ) : (
                  <Music2 className="size-3.5 shrink-0 text-fg-subtle" />
                )}
                <span className="truncate font-display text-sm text-fg">
                  {item.name}
                </span>
              </button>
              <button
                type="button"
                aria-label={`Delete ${item.name}`}
                onClick={() => deleteSaved(item.id)}
                className="grid size-9 place-items-center rounded-sm text-fg-subtle hover:text-danger"
              >
                <Trash2 className="size-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

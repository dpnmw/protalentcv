import { cn } from "@/utils/style";

type Props = React.ComponentProps<"div">;

export function Copyright({ className, ...props }: Props) {
  return (
    <div className={cn("text-xs leading-relaxed text-muted-foreground/80", className)} {...props}>
      <p>
        Built by{" "}
        <a
          target="_blank"
          rel="noopener"
          href="https://dpnmw.com"
          className="font-medium underline underline-offset-2"
        >
          DPN Media Works
        </a>
      </p>

      <p className="mt-4">ProTalent CV v{__APP_VERSION__}</p>
    </div>
  );
}

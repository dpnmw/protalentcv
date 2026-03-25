import { cn } from "@/utils/style";

type CheckboxProps = React.ComponentProps<"input"> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

function Checkbox({ onCheckedChange, onChange, className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      onChange={(e) => {
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      }}
      className={cn(
        "size-4 shrink-0 cursor-pointer rounded border border-input accent-primary disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Checkbox };

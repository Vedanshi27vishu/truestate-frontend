export function Badge({ className, ...props }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs ${className}`} {...props} />
  )
}

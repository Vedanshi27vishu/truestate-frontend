export function Table({ className, ...props }) {
  return <table className={`w-full text-sm ${className}`} {...props} />
}

export function TableHeader(props) {
  return <thead {...props} />
}

export function TableBody(props) {
  return <tbody {...props} />
}

export function TableRow({ className, ...props }) {
  return <tr className={`border-b ${className}`} {...props} />
}

export function TableHead({ className, ...props }) {
  return <th className={`px-3 py-2 text-left font-semibold ${className}`} {...props} />
}

export function TableCell({ className, ...props }) {
  return <td className={`px-3 py-2 ${className}`} {...props} />
}

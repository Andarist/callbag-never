const noop = () => {}

export default function never(start, sink) {
  if (start !== 0) return
  sink(0, noop)
}

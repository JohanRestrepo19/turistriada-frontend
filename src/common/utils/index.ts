export const currencyFormater = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0
})

export const convertFirestoreTimeStampToDate = ({
  seconds,
  nanoseconds
}: {
  seconds: number
  nanoseconds: number
}): Date => {
  const ts = (seconds + nanoseconds / 1000000000) * 1000
  return new Date(ts)
}

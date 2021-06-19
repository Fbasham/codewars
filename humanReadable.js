function humanReadable(t){
  let [h,tm] = [~~(t/3600),t%3600]
  let [m,s] = [~~(tm/60),tm%60]
  const f=s=>('0'+s).slice(-2)
  return `${f(h)}:${f(m)}:${f(s)}`
}
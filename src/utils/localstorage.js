export const set = (board, key, value) => {
  let data = localStorage.getItem(board)
  if (!data) {
    data = '{}'
  }
  try {
    data = JSON.parse(data)
    data[key] = value
    localStorage.setItem(board, JSON.stringify(data))
    return true
  } catch (err) {
    return false
  }
}

export const get = (board, key) => {
  let data = localStorage.getItem(board)
  if (!data) {
    return false
  }
  try {
    data = JSON.parse(data)
    return data[key]
  } catch (err) {
    console.log(err)
    return false
  }
}

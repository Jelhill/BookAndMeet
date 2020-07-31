
// Checking for Token and Updating State
export const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key)  
    if (!itemStr) {
      return false
    }        
    const expiryTime = itemStr.split(" ")[1] 
    const now = new Date()
    if (now.getTime() > expiryTime) {
      localStorage.removeItem(key)
      return false
    }
    return true
}

//SET TOKEN IN LOCAL STORAGE
export const setWithExpiry = (key, token, tokenDuration) => {
    const now = new Date()
    const expiryTime = now.getTime() + tokenDuration
    localStorage.setItem(key, `${token} ${expiryTime}`)
}



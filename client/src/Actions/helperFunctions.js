
// Checking for Token and Updating State
export const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key)  
    if (!itemStr) {
      return false
    }        
    const expiryTime = itemStr.split(" ")[1] 
    const id = itemStr.split(" ")[2] 
    const firstname = itemStr.split(" ")[3] 

    const now = new Date()
    if (now.getTime() > expiryTime) {
      localStorage.removeItem(key)
      return {isLoggedIn: false}
    }
    return {isLoggedIn: true, id: id, firstname: firstname}
}

//SET TOKEN IN LOCAL STORAGE
export const setWithExpiry = (key, token, tokenDuration, userInfo) => {
    console.log("PAyload", userInfo)
    const now = new Date()
    const expiryTime = now.getTime() + tokenDuration
    localStorage.setItem(key, `${token} ${expiryTime} ${userInfo.id} ${userInfo.firstname}`)
}



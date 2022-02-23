const fakeUser = {
  id: '001',
  email: 'fakeuser@mail.com',
  firstName : 'John',
  lastName: 'Hancock',
  username: 'noobmaster69'
}


export const fetchUser = () => new Promise((resolve, reject) => {
  setTimeout(()=> {
      try{
          resolve(fakeUser)

      } catch(e){
          reject(e)
      }
  }, 1000)
})

export const auth =  (user) => {
  const userEmail = {
    email : user.email,
  };
  fetch('https://car-doctor-server-sigma-indol.vercel.app/jwt',{
    method:'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body:JSON.stringify(userEmail)
  })
  .then(res => res.json())
  .then(result => {
    //console.log('return jwt',result.token);
    localStorage.setItem('genius-token',result.token);

  })
}
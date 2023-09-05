import * as usersService from '../../utilities/users-service';


export default function OrderHistoryPage() {
  
  async function handleCheckToken(e) {
    try{
      const expDate = await usersService.checkToken();
      console.log(expDate); 
      

    }catch(error){

    }
  }
  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When Log In Expires</button>
    </>
  );
}
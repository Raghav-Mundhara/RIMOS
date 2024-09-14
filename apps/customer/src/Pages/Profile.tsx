import Button from "../components/Button"

function Profile() {
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className="bg-slate-800 p-8 rounded-xl">
          <div className="text-3xl text-white text-center mb-6">
            <h1>Profile</h1>
          </div>
          <div>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="rounded-full h-24 w-24 mx-auto" />
          </div>
          <div className="text-white bg-slate-700 p-2 rounded-lg m-2">
            <p>Username: Raghav</p>
            <p>Email: mundhararaghav16@gmail.com </p>
            <p className="mb-2">Phone: 9987380617 </p>
            <Button title="Edit Profile" onClick={() => { }} />
          </div>
          <div className="text-white bg-slate-700 p-2 rounded-lg m-2">
            <div>
              Refferal Code : 123456
            </div>
            <div>
              Loyalty Points: 100
            </div>
            <div>
              <Button title="Redeem Points" onClick={() => { }} />
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              DELETE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
export const Profile = (props)=>{

    const {authorname,location,emailid} = props
    return (
        <div className='profile-container'>
                {/* <button>Click to get the component type!!</button> */}
            <h1>Author Name : {authorname}</h1>
            <h2>Location : {location}</h2>
            <h3>Emailid : {emailid}</h3>
        </div>
    )
}
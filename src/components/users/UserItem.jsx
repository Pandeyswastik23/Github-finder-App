import React from 'react'

const UserItem = ({ user: { login, avatar_url, html_url } })=> 
{

     
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt='image not found' className='round-img' style={{ width: '60px' }} />
                
                <h3>
                    {login}

                    <div>
                        <a href={html_url} className="btn btn-dark btn-sm my-1" target = "_blank">More</a>
                    </div>
                    
                </h3>
            </div>
        )
   
}

export default UserItem

import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
    <>
    <h3>Interview generation</h3>

{/* <Agent
  userName={user?.name!}
  userId={user?.id}
  profileImage={user?.profileURL}
  type="generate"/> */}
  <Agent userName="You" userId="user1" type="generate"/>
    </>
    
  )
}

export default page
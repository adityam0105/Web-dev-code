import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atom'
function App() {
  return(<RecoilRoot>
    <MainApp/>
  </RecoilRoot>)  
}
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const JobsCount =useRecoilValue(jobsAtom)
  const MessageCount=useRecoilValue(messagingAtom)
  const NotificationCount=useRecoilValue(notificationsAtom)
  const totalNotificationValue=useRecoilValue(totalNotificationSelector)
  return(
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount>=100?"99+":networkNotificationCount})</button>
      <button>Jobs ({JobsCount})</button>
      <button>Messaging ({MessageCount})</button>
      <button>Notifications ({NotificationCount})</button>

      <button>Me ({totalNotificationValue})</button>
    </div>)
}

export default App

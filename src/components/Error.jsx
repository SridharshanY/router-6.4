import { useNavigate, useRouteError } from 'react-router-dom'
import errorImg from '../images/404.png'

const Error = () => {
  const navigate = useNavigate()
  const error = useRouteError()
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <img src={errorImg} className='w-full max-h-[80vh]' alt="" />
      <p>{error.data}</p>
      <p>{error.message}</p>
      <button className='px-4 py-2 border-4 border-black rounded-xl hover:bg-black hover:text-white duration-150 active:scale-90' onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default Error

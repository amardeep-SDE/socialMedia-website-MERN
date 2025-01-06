import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link } from 'react-router-dom';

const RightSidebar = () => {
  return (
    <div className='w-fit my-10 pr-32'>
      <div className='flex items-center gap-2'>
        <Link to="">
          <Avatar>
            <AvatarImage src="" alt="post_image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h1 className='font-semibold text-sm'><Link to="">username</Link></h1>
          <span className='text-gray-600 text-sm'>bio</span>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
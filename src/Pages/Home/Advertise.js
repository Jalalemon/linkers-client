import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContexts } from '../../auth/AuthProvider';
import Loading from '../Bookings/Loading';
import AdvertiseCart from './AdvertiseCart';

const Advertise = () => {
    const {user} = useContext(AuthContexts)
       const url = `https://linkers-server.vercel.app/advertiseHome?email=${user?.email}`;
       const { data: advertise = [], isLoading } = useQuery({
         queryKey: ["advertise", user?.email],
         queryFn: async () => {
           const res = await fetch(url, {
             headers: {
               authorization: `bearer ${localStorage.getItem("accessToken")}`,
             },
           });
           const data = await res.json();
           console.log(data);
           return data;
         },
       });

       if (isLoading) {
         return <Loading></Loading>;
       }
    return (
      <div>
        <div className="text-3xl my-6 font-semibold"> Addvertise</div>
        <div>
            {
                advertise.length === 0 &&
                <div className="text-xl"> Have no advertise </div>
            }
        </div>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {advertise.map((category) => (
            <AdvertiseCart
              key={category._id}
              category={category}
            ></AdvertiseCart>
          ))}
        </div>
      </div>
    );
};

export default Advertise;
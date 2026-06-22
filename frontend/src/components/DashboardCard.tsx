type Props = {
title: string;
children: React.ReactNode;
};

export default function DashboardCard({
title,
children,
}: Props) {
return ( <div
   className="
     bg-white
     rounded-lg
     shadow-md
     p-5
     mb-6
   "
 > <h2
     className="
       text-xl
       font-bold
       mb-4
     "
   >
{title} </h2>


  {children}
</div>


);
}

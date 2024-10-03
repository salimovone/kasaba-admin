import React from 'react';
import { useGetApplicationsQuery, useGetEmployeesQuery } from '../../services/redux';
import { InfoCard } from '../../components';

const InfoCards = () => {
  // RTK Query orqali ma'lumotlarni olish
  const { data: applications = [], error: appError } = useGetApplicationsQuery();
  const { data: employe = 0, error: empError } = useGetEmployeesQuery();


  // Qabul qilingan arizalarni filtrlaymiz
  const acceptedApplications = applications.filter(app => app.status === "ad");

  // Agar xatolik yuz bersa
  if (appError || empError) return <div>Xatolik yuz berdi!</div>;

  // InfoCard ma'lumotlari
  const InfoCardData = [
    {
      id: 0,
      title: "hozirgi mablag'",
      value: 2257.81,
      compare: "+55%",
    },
    {
      id: 1,
      title: "Ishchilar",
      value: employe.length,
    },
    {
      id: 2,
      title: "Arizalar",
      value: applications.length,
    },
    {
      id: 3,
      title: "qabul qilingan arizalar",
      value: acceptedApplications.length,
    },
  ];

  return (
    <div className='grid items-center grid-cols-4 gap-3 w-full mt-4 mb-6 pr-4'>
      {InfoCardData.map((itm) => {
        return (
          <InfoCard key={itm.id} title={itm.title} value={itm.value} />
        )
      })}
    </div>
  );
};

export default InfoCards;

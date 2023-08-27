import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
  ];
  const  id  = router.query.id;

  // Find the team member's details based on the id
  const memberDetails = details.find(detail => detail.id === parseInt(id));

  // If member details are not found, show "Developer doesn't exist"
  if (!memberDetails) {
    return <div>Developer doesnot exist</div>;
  }

  return (
    <div>
      <h1>{memberDetails.name}</h1>
      <p>{memberDetails.role}</p>
    </div>
  );
};

export default Details;

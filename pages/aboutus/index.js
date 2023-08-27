import Link from "next/link";
function AboutusPage(){
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' },
      ];
      
    return (
        <div>
        <h1>The Aboutus Page</h1>
        <ul>
        {details.map(detail => (
          <li key={detail.id}>
            <Link href={`/aboutus/${detail.id}`}>{detail.name}</Link>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default AboutusPage

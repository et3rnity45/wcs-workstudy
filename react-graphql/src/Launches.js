import { useQuery, gql } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error !</p>;


  return (
    <pre>
      <code>
        {JSON.stringify(data, undefined, 2)}
      </code>
    </pre>
  )
}

export default Launches;
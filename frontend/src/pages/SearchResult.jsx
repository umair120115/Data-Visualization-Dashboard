import Table from 'react-bootstrap/Table';
function SearchResult({searched}){
    return <> <div className='searched-table'><Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Id</th>
        <th>End_Year</th>
        <th>Intensity</th>
        <th>Sector</th>
        <th>Topic</th>
        <th>Insight</th>
        <th>Region</th>
        <th>Added</th>
        <th>Country</th>
        <th>Relevance</th>
        <th>Pestle</th>
        <th>Source</th>
        <th>Likelihood</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{searched.id}</td>
        <td>{searched.end_year}</td>
        <td>{searched.intensity}</td>
        <td>{searched.sector}</td>
        <td>{searched.topic}</td>
        <td>{searched.insight}</td>
        <td>{searched.region}</td>
        <td>{searched.added}</td>
        <td>{searched.country}</td>
        <td>{searched.relevance}</td>
        <td>{searched.pestle}</td>
        <td>{searched.source}</td>
        <td>{searched.Likelihood}</td>
      </tr>
     
    </tbody>
  </Table>
  </div>
  </>

}
export default SearchResult;
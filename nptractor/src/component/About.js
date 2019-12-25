import React from "react";
import { Container } from 'react-bootstrap';
import RPM01 from '../asset/img02/RPM01.jpg'
import RPM03 from '../asset/img02/RPM03.jpg'
import Table from 'react-bootstrap/Table'

export function About() {
    return(<Container>
        <img
            className="d-block w-100"
            src={RPM03}
            alt="Third slide"
        />
<p>Nuttaphong Tractor co., ltd. has been delivering professional construction services across Thailand and the regions for over 30 years of experiences and over 200 executed projects. Our company has been successful due to the professional managerial skills, experiences, great team works, and the technical knowledge of specialized staffs which pooled together have proven the successful results. We continue to grow our company focusing on the quality, continuous improvement, and career development of our staffs in order to produce best results for ourselves and our clients We offer a full range of preconstruction and construction services. We specialized in roadwork, bridges, infrastructure works, utility trenches, duct banks and marina works. Our project teams maintain a strong foundation of trust and mutual respect generated though positive relationships with the clients, architects, consultant teams, subcontractors and suppliers. Our company wide policy encouraging shared performance responsibilities ensures the highest degree of professional services and result on all projects undertaken.</p>
<h3>Our Professional staffs</h3>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Postition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nuttaphong</td>
      <td>Visuthiphol</td>
      <td>Managing Director</td>
    </tr>
    <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Financial Director</td>
    </tr>
    <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Construction manager</td>
    </tr>    
    <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Senior engineer</td>
    </tr>
    <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Project manager</td>
    </tr>    
    <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Factory manager</td>
    </tr>    
    <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Accounting Department Manager</td>
    </tr>    
    <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Marketting Manager</td>
    </tr>   
     <tr>
      <td>Oranuch</td>
      <td>Thaiwutthiphong</td>
      <td>Financial Director</td>
    </tr>
  </tbody>
</Table>
</Container>)
}

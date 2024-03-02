import React from 'react';
import './GovernScheme.css'; // Import CSS file for styling

const GovernmentSchemes = ({ schemes }) => {
  return (
    <div className="government-schemes-table-container">
      <table className="government-schemes-table">
        <thead>
          <tr>
            <th>SR.NO</th>
            <th>TITLE</th>
            <th>PUBLISH DATE</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {schemes.map((scheme, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{scheme.title}</td>
              <td>{scheme.publishDate}</td>
              <td><a href={scheme.link} target="_blank" rel="noopener noreferrer">Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GovernmentSchemes;

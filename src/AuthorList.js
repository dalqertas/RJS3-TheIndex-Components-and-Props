import React from 'react';
import AuthorCard from './AuthorCard';

function AuthorList(){
    return (
        
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">
            <AuthorCard/>
          </div>
        </div>
    );
}
export default AuthorList;
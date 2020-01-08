import React from "react";
import authors from './data';

function AuthorCard(){
    return (
        authors.map(author => (
            <div className="col-lg-4 col-md-6 col-12" key={author.name}>
            <div className="card">
              <div className="image">
                <img
                  className="card-img-top img-fluid"
                  src={author.imageUrl}
                  alt={author.first_name + " " + author.last_name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <span>
                    {author.first_name + " " + author.last_name}
                  </span>
                </h5>
                <small className="card-text">
                  {author.books.length} books
                </small>
              </div>
            </div>
          </div>
        ))
        
    );
}
export default AuthorCard; 
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Input() {
  const blogtitleRef = useRef();
  const descriptionRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={onSubmitHandler}>
        <div className="mb-3 container">
          <label htmlFor="email" className="form-label">
            
          </label>
          {/* below is input field for title of blog fahad webdeveloper */}
          <input
            id="blogtitle"
            name="blogtitle"
            ref={blogtitleRef}
            required
            className="form-control"
            placeholder="Place holder"
          />
        </div>
        <div className="mb-3 container">
          <label htmlFor="description" className="form-label">
            
          </label>
          {/* below is text Area for descript of blog fahad webdeveloper */}
          <textarea
            className="form-control"
            id="description"
            ref={descriptionRef}
            autoComplete="description"
            required
            rows="7"
            placeholder="What's on your mind"
          ></textarea>
        </div>
        <div className="container">
          <div>
            <button type="submit" className="btn btn-primary">
              Publish Blog
            </button>
          </div>
        </div>
      </form>
      {/* below compoenet base css Fahad webdeveloper */}
      <style jsx global>{`
        #marginww {
          margin-left: 0px;
        }
      `}</style>
    </div>
  );
}

export default Input;

import React from "react";

const FilteredSidebar = () => {
    return (
        <div>
          <h2>Filter Attendees</h2>
          <form>
            <label>
              By Name
              <input />
            </label>
            <hr></hr>
            <label>
              School
                <div>
                 <label>
                    <input />
                    College
                  </label>
                  <label>
                    <input />
                    Law
                  </label>
                </div>
            </label>
            <hr></hr>
            <label>
              Registration Status
              <div>
                <label>
                <input />
                  Registered
                </label>
                <label>
                  <input  />
                  Not Registered
                </label>
              </div>
            </label>
          </form>
        </div>
      );
    };
    
export default FilteredSidebar;
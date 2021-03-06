import React, { Component } from 'react';



// class CourseComponent extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       displayMenu: false,
//       users:[]
//     };

//     this.showDropdownMenu = this.showDropdownMenu.bind(this);
//     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

//   };

//   showDropdownMenu(event) {
//     event.preventDefault();
//     this.setState({ displayMenu: true }, () => {
//       document.addEventListener('click', this.hideDropdownMenu);
//     });
//   }

//   hideDropdownMenu() {
//     this.setState({ displayMenu: false }, () => {
//       document.removeEventListener('click', this.hideDropdownMenu);
//     });

//   }
//   handleClick(id) {
//     debugger;
//     console.log(id)
//     alert(id);
//     fetch('/users/course', 
//         {
//           method: 'GET', 
//           // body: JSON.stringify({
//           //     id: id,
//           // })
//       })
//         .then((response) => response.text()
//         )
//   }
    
//   render() {
//     return (
//       <div className="container dropdown">
//         <div className="row">
//           <div className="col-md-4 offset-md-5">
//             <button class="btn btn-warning dropdown-toggle" data-toggle="dropdown"
//               onClick={this.showDropdownMenu}> List of Courses </button>

//             {this.state.displayMenu ? (
//               <div>
//                 <button onClick={this.handleClick}><h3>HTML</h3></button><br />
//                 <button><h3>CSS</h3></button><br />
//                 <button><h3>JavaScript</h3></button><br />
//                 <button><h3>JQuery</h3></button><br />
//                 <button><h3>ReactJS</h3></button><br />
//                 <button><h3>AngularJS</h3></button><br />
//                 <button><h3>Sass</h3></button><br />
//                 <button  onClick={this.handleClick}><h3>NodeJS</h3></button><br />
//               </div>
//             ) :
//               (
//                 null
//               )
//             }
//           </div>
//         </div>
//         {/* {this.state.users.map(profileuser =><div>
//           <p><b>Student Name :</b> {profileuser.studentname}</p>
//               <p><b>Email :</b> {profileuser.email}</p>
//               <p><b>Course :</b> {profileuser.course}</p>
//               <p><b>Address :</b> {profileuser.address}</p>
//               <p><b>Mobile Number : </b>{profileuser.mobileNumber}</p>
//           </div>)} */}
//                   <RepoList repos={this.state.repos} />
//       </div>

//     );
//   }
// }
// export default CourseComponent;





class CourseComponent  extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      users:[],
    };
    this.handleClick = this.handleClick.bind(this)
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }
  handleClick(event) {
    console.log(event.target.textContent)
    fetch(
      'http://localhost:8000/users/course?course='+event.target.textContent
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({users: data})
      })
      .catch(e => console.log('err', e))
  }

  render() {
    return (
      <div className="container dropdown">
             <div className="row">
            <div className="col-md-3 offset-md-1">
        <button class="btn btn-warning dropdown-toggle" data-toggle="dropdown"
         onClick={this.showMenu}> List of Courses </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.handleClick}><h3>HTML</h3></button><br />
                <button><h3>CSS</h3></button><br />
                <button onClick={this.handleClick}><h3>JavaScript</h3></button><br />
                <button onClick={this.handleClick}><h3>JQuery</h3></button><br />
                <button><h3>ReactJS</h3></button><br />
                <button><h3>AngularJS</h3></button><br />
                <button><h3>Autocad</h3></button><br />
                <button  onClick={this.handleClick}><h3>NodeJS</h3></button><br />
              </div>
            )
            : (
              null
            )
        }
      </div>
      <div className="col-md-3 offset-md-1">
    
          {this.state.users &&
            this.state.users.map((item, index) => (
              <div className="list-group-item list-group-item-action flex-column 
              align-items-start">
                 <h3 className="text-center">Details</h3>
              <div key={index.toString()} >
              <p><b>Student Name :</b> {item.studentname}</p>
              <p><b>Course :</b> {item.course}</p>
              <p><b>Email :</b>{item.email}</p>
              <p><b>Mobile Number :</b>{item.mobileNumber}</p>
              </div>
              </div>
              ))}
      </div>
      </div>
      </div>
    );
  }
}

export default CourseComponent;
